import React, { Component, useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./css/ProductList.module.css";
import Item from "./productItem";
import { stringify } from "uuid";
import { useRouter } from "next/router";



const ProductList = ({ items, setselected, selected }) => {
  const [deleteButton, setdeleteButton] = useState(null);
  const router = useRouter()
  const category = items.data === null ? null : items.data.category
  const products = items.data === null ? [] : items.data.products

  const editSelected = async (action, ele) => {
    if (action === "ADD") {
      setselected([...selected, ele])
      console.log('in add')
      console.log([...selected, ele])
    }
    if (action === "REMOVE") {
      console.log('in remove')
      const filtered = selected.filter((elem) => {
        return elem !== ele
      });
      console.log(filtered)
      await setselected(filtered);
    }
    
    }

  useEffect(() => {
    if (selected) {
      setdeleteButton(
        selected.length > 0 ? <button onClick={deleteProducts}>Delete ({selected.length})</button> : null);
    }
  }, [selected])
  

  const deleteProducts = async () => {
    const resp = await fetch('https://jej-world-website.vercel.app/api/v1/hello', 
    {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({selected,})
    })
    if (resp.status === 200) {
      router.reload(window.location.pathname)
    }
    console.log(resp)
  }


  return (
    <div className={styles.products}>
      <div className={styles.top}>
        <h2>{category}</h2>
        {deleteButton}
      </div>
      <div className={styles.productsArea}>
        {products.map((item) => {
          return (
            <Item
              setselected={editSelected}
              key={item.id}
              item={item}
              cpanel={items.cpanel}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
