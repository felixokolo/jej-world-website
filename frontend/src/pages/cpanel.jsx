import ProductList from "@/components/productList";
import Header from "@/components/header";
import AddPanel from "@/components/addPanel";

const CPanel = ({products, cpanel}) => {
  return (
    <div>
      <Header></Header>
      <h2>Welcome Juliana</h2>
      <div>
        <ProductList items={{products, cpanel}}></ProductList>
        <AddPanel></AddPanel>
      </div>

    </div>
  )
}

export default CPanel;

export async function getServerSideProps(context) {
  const resp = await fetch('http://localhost:3000/api/v1/hello');
  const data = await resp.json();
  return {
    props: {
      products: data,
      cpanel: true,
    },
  }
}
