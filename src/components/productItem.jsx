import React, { Component } from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./css/Product.module.css";

const Item = ({ item, cpanel, setselected }) => {
  const editSelected = (e) => {
    const value = e.target.checked;
    if (value) setselected("ADD", e.target.id);
    else setselected("REMOVE", e.target.id);
  };
  const check = cpanel ? (
    <input
      className={styles.checkbox}
      type="checkbox"
      onChange={editSelected}
      id={item.id}
    />
  ) : null;

  const getObject = async () => {
    
  }

  return (
    <div
      className={styles.product}
      style={{
        backgroundImage: `url(${item.AWS.Location})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <Image
          src={item.url}
          alt="image"
          width={500}
          height={500}
          placeholder
        /> */}
      {check}
      <div className={styles.details}>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.price}>{item.price}</p>
      </div>
    </div>
  );
};

export default Item;
