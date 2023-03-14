import React, { Component } from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./css/Product.module.css";

const Item = ({ item }) => {
  return (
    <div className={styles.product}>
        <Image
          src={item.url}
          alt="image"
          width={500}
          height={500}
          placeholder
        />
      <div>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.price}>{item.price}</p>
      </div>
    </div>
  );
};

export default Item;
