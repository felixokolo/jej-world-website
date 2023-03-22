import React, { Component } from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./css/Category.module.css";

const Category = ({ item }) => {
  return (
    <div className={styles.container}>
        <div className={styles.category}>
          <Image
            src={item.logoURL}
            alt="logo"
            width={500}
            height={500}
            //placeholder="blur"
          />
                <p className={styles.name}>{item.name}</p>
        </div>
    </div>
  );
};

export default Category;
