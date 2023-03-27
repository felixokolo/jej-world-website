import ProductList from "@/components/productList";
import Header from "@/components/header";
import AddPanel from "@/components/addPanel";
import styles from "@/styles/CPanel.module.css";
import Orderlist from "@/components/orderList";
import { use, useState } from "react";

const CPanel = ({ data, cpanel, orders }) => {
  const [selected, setselected] = useState([]);
  return (
    <div>
      <Header></Header>
      <h2>Welcome Juliana</h2>
      <div className={styles.hero}>
        <div>
          <ProductList
            items={{ data, cpanel }}
            setselected={setselected}
            selected={selected}
          ></ProductList>
        </div>
        <div>
          <h3>Add Products</h3>
          <AddPanel></AddPanel>
        </div>
        <div className={styles.requests}>
          <h3>Requests</h3>
          <Orderlist items={orders}></Orderlist>
        </div>
      </div>
    </div>
  );
};

export default CPanel;

export async function getServerSideProps() {
  let resp = await fetch(`${process.env['BASE_URL']}/api/v1/dbedit?${new URLSearchParams({collection: "products"})}`);
  const data1 = await resp.json();
  resp = await fetch(`${process.env['BASE_URL']}/api/v1/dbedit?${new URLSearchParams({collection: "orders"})}`);
  const data2 = await resp.json();
  return {
    props: {
      data: data1.length === 0 ? null : data1[0],
      orders: data2.length === 0 ? null : data2,
      cpanel: true,
    },
  };
}
