import React, { Component } from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./css/ProductList.module.css";
import Item from "./productItem";

const ProductList = ({ items }) => {
  return (
    <div className={styles.products}>
            <h2>{items.category}</h2>
            <div className={styles.productsArea}>
            {
            items.products.map((item) => {
              return <Item key={item.id} item={item}/>
            })}
            
            </div>
          </div>
  );
};

export default ProductList;
