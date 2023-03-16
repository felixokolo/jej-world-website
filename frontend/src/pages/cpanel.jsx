import ProductList from "@/components/productList";
import Header from "@/components/header";

const CPanel = ({products}) => {
  return (
    <div>
      <Header></Header>
      <ProductList items={{products}}></ProductList>
    </div>
  )
}

export default CPanel;

export async function getServerSideProps(context) {
  const resp = await fetch('http://localhost:3000/api/v1/hello');
  const data = await resp.json();
  console.log(data);
  return {
    props: {products: data},
  }
}
