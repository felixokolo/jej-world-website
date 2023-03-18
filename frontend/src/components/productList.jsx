import React, { Component, useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./css/ProductList.module.css";
import Item from "./productItem";

const ProductList = ({ items, setselected, selected }) => {
  const [deleteButton, setdeleteButton] = useState(null);
  const editSelected = (action, ele) => {
    if (action === "ADD") {
      setselected([...selected, ele]);
    }
    if (action === "REMOVE") {
      const index = selected.indexOf(ele);
      selected.splice(index, 1);
      setselected(selected);
    }
    console.log(selected);
  };

  if (selected) {
    useEffect(() => {
      setdeleteButton(
        selected.length > 0 ? <button>Delete ({selected.length})</button> : null
      );
    });
  }
  return (
    <div className={styles.products}>
      <div>
        <h2>{items.data.category}</h2>
        {deleteButton}
      </div>
      <div className={styles.productsArea}>
        {items.data.products.map((item) => {
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
