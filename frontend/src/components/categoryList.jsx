import React, { Component } from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./css/CategoryList.module.css";
import Category from "./category";

const CategoryList = ({ items }) => {
  return (
    <div className={styles.categories}>
            <h2>{items.category}</h2>
            <div className={styles.categoryArea}>
            {
            items.map((item) => {
              return <Category key={item.id} item={item}/>
            })}
            
            </div>
          </div>
  );
};

export default CategoryList;
