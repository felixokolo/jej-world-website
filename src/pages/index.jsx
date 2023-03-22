import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Product from "@/components/slide";
import ProductList from "@/components/productList";
import CategoryList from "@/components/categoryList";
import { useRouter } from "next/router";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, cpanel }) {
  const router = useRouter();
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

  const items = {
    category: "Fabrics",
    products: [
      {
        id: 1,
        url: "/images/products/1.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 2,
        url: "/images/products/2.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 3,
        url: "/images/products/3.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 4,
        url: "/images/products/4.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 5,
        url: "/images/products/5.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 6,
        url: "/images/products/6.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 7,
        url: "/images/products/7.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 8,
        url: "/images/products/8.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 9,
        url: "/images/products/9.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 10,
        url: "/images/products/10.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 11,
        url: "/images/products/11.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 12,
        url: "/images/products/12.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 13,
        url: "/images/products/13.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 14,
        url: "/images/products/14.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 15,
        url: "/images/products/15.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 16,
        url: "/images/products/16.jpeg",
        name: "Plain Silk",
        price: "N 7,500",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  };

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
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainBody}>
        <Header></Header>
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
            <h2>Login</h2>
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
            <ProductList items={{ data, cpanel }}></ProductList>
          </div>
        </div>
      </main>
    </>
  );
}


export async function getServerSideProps() {

  const resp =  await fetch('http://localhost:3000/api/v1/hello');
  const data = await resp.json();
  
  return {
    props: {
      data: data.length === 0 ? null : data[0],
      cpanel: false,
    },
  };
}