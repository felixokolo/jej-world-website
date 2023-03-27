import React, { Component } from "react";
import Image from "next/image";
import styles from "./css/Order.module.css";

const Order = ({ item }) => {
  return (
    <div className={styles.container}>
      <h3>Request from {item.name}</h3>
      <h4>Requests the following items;</h4>
      <ol>
        {item.items.map(x => <li key={x}>{x}</li>)}
      </ol>
    </div>
  )
};

export default Order;
