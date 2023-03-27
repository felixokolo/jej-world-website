import React, { Component, useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./css/OrderList.module.css";
import Item from "./productItem";
import { stringify } from "uuid";
import { useRouter } from "next/router";
import Order from "./orderItem";



const Orderlist = ({ items }) => {
  
  return (
    <div className={styles.container}>
      {items.map((ele) => <Order key={ele.id} item={ele}></Order>)}
    </div>
  )

};

export default Orderlist;
