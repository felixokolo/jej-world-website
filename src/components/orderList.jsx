import React, { Component, useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./css/OrderList.module.css";
import Item from "./productItem";
import { stringify } from "uuid";
import { useRouter } from "next/router";
import Order from "./orderItem";



const Orderlist = ({ items }) => {
  let requests
  if (items.length === 0) requests = <p>No requests at the moment</p>
  else requests = items.map((ele) => <Order key={ele.id} item={ele}></Order>)
  return (
    <div className={styles.container}>
      {requests}
    </div>
  )

};

export default Orderlist;
