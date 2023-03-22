import ProductList from "@/components/productList";
import Header from "@/components/header";
import AddPanel from "@/components/addPanel";
import styles from "@/styles/CPanel.module.css";
import { use, useState } from "react";

const CPanel = ({ data, cpanel }) => {
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
      </div>
    </div>
  );
};

export default CPanel;

export async function getServerSideProps() {
  const resp = await fetch("https://jej-world-website.vercel.app/api/v1/hello");
  const data = await resp.json();
  return {
    props: {
      data: data.length === 0 ? null : data[0],
      cpanel: true,
    },
  };
}
