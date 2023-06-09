import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Product from "@/components/slide";
import ProductList from "@/components/productList";
import CategoryList from "@/components/categoryList";
import { useRouter } from "next/router";
import Header from "@/components/header";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, cpanel }) {
  const router = useRouter();
  const [cartNum, setcartNum] = useState(6);
  const [selected, setSelected] = useState({})

  const setcart = (item) => {
    setSelected({...selected, [item]: 1});
    
  }

  useEffect(() => {
    console.log(selected)
    setcartNum(Object.keys(selected).length)
  }, [selected])


  const images = [
    {
      url: "/images/orand.jpeg",
      name: "Akwa oche",
      price: "N 7,500",
    },
    {
      url: "/images/silk.jpeg",
      name: "Silk",
      price: "N 9,500",
    },
  ];

  const categories = [
    {
      id: 1,
      logoURL: "/images/categories/fabrics.png",
      name: "Fabrics",
    },
    {
      id: 2,
      logoURL: "/images/categories/hats.png",
      name: "Hats",
    },
    {
      id: 3,
      logoURL: "/images/categories/clothes.png",
      name: "Clothes",
    },
    {
      id: 4,
      logoURL: "/images/categories/hairs.png",
      name: "Hairs",
    },
    {
      id: 5,
      logoURL: "/images/categories/shoes.png",
      name: "Shoes",
    },
  ];

  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === 'pheelix' && password === 'testing') {
      router.push("/cpanel");
    }
    
  }

  return (
    <>
      <Head>
        <title>JEJ World Classic</title>
        <meta name="description" content="Fashion World" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainBody}>
        <Header cartNum={cartNum} selected={selected}></Header>
        <div className={styles.hero}>
          <div className="categories">
            <h2>Categories</h2>
            <CategoryList items={categories} />
          </div>
          <div className="recent">
            <h2>Recent</h2>
            <div className={styles.slider}>
              <Product images={images}></Product>
            </div>
          </div>
          <div className={styles.login}>
            <h2>Admin Login</h2>
            <div className={styles.inputFields}>
              <label htmlFor="username">Username</label>
              <input id="username" type="text" name="username" />
            </div>
            <br />
            <div className={styles.inputFields}>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" />
            </div>
            <br />
            <button onClick={login}>Login</button>
          </div>
          <div className={styles.products}>
            <ProductList items={{ data, cpanel }} setcart={setcart}></ProductList>
          </div>
        </div>
      </main>
    </>
  );
}


export async function getServerSideProps() {

  const resp =  await fetch(`${process.env['BASE_URL']}/api/v1/dbedit?${new URLSearchParams({collection: "products"})}`);
  const data = await resp.json();
  
  return {
    props: {
      data: data.length === 0 ? null : data[0],
      cpanel: false,
    },
  };

}