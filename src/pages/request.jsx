import ProductList from "@/components/productList";
import Header from "@/components/header";
import AddPanel from "@/components/addPanel";
import styles from "@/styles/Requests.module.css";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Requests = () => {
  const router = useRouter();
  const [list, setList] = useState(<p>Please wait..... Loading selected items</p>);
  let selected = [];
  if (router.query.selected)
    selected = router.query.selected.split(" ")
  const [filtered, setFil] = useState([]);

  const fetchProducts = async () => {
    const resp = await fetch(`/api/v1/dbedit?${new URLSearchParams({collection: "products"})}`);
    const data = await resp.json();
    let fil
    if (selected.length > 0)
    fil = data[0].products.filter((ele) => {
      return selected.includes(ele.id);
    });
    setFil(fil)
    const s = <ol type="1">
    {fil.map((ele) => {
      return (
        <li key={ele.id}>{ele.name}</li>
      )
    })}
  </ol>
  setList(s)
  }


    useEffect(() => {
    fetchProducts();
  }, [])


  const logMessage = async (e) => {
  e.preventDefault();
  const form = e.target;

    const details = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      items: filtered.map(ele => ele.name )
    }

    const resp = await fetch(`/api/v1/dbedit?${new URLSearchParams({collection: "orders"})}`,{
    method: 'POST',
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (resp.status === 200) {
      const res = await resp.json()
      console.log(res)
      router.push('/')
    }
  }



  return (
    <div>
        <Header></Header>
      <div className={styles.hero}>
        
        <h3>Request the following items</h3>
        {list}
        <form action="#" onSubmit={logMessage}>
            <label htmlFor="name">Name</label>
            <br />
            <input required type="text" name="name" />
            <br />
            <label htmlFor="phone">Phone</label>
            <br />
            <input required type="text" name="phone"/>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input required type="email" name="email"/>
            <br />
            <input type="submit" value="Send"/>
        </form>
      </div>
    </div>
  );
};

export default Requests;
