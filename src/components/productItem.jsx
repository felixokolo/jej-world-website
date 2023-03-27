import React, { Component, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./css/Product.module.css";

const Item = ({ item, cpanel, setselected, setcart }) => {
  const [productImage, setProductImage] = useState("/images/categories/fabrics.png")
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

  const addToCart = (e) => {
    setcart(e.target.id)
  }
  
  const addCart = cpanel ? null : (
    <button
      className={styles.cartButton}
      onClick={addToCart}
      id={item.id}
    > Add to Cart </button>
  );

  const getProductImage = async () => {
    const resp = await fetch(item.image)
    const tmpProductImage = await resp.text()
    setProductImage(tmpProductImage)
  }

  useEffect(() => {getProductImage()})



  return (
    <div
      className={styles.product}
    >
      <Image src={productImage} width={500} height={500} alt="image"></Image>
      {check}
      <div className={styles.details}>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.price}>{item.price}</p>
      </div>
      {addCart}
    </div>
  );
};

export default Item;
