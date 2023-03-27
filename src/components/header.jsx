import { useRouter } from "next/router";
import styles from "./css/Header.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";



function Header({ cartNum, selected }) {
  const router = useRouter();
  let cartDet = cartNum ? <small>{cartNum}</small> : null;
  const link = selected ? `/request?${new URLSearchParams({selected: Object.keys(selected).join(" ")})}` : "#";

  const goHome = () => {
    router.push("/")
  }

  /* useEffect(() => {
    cartDet =  cartNum ? <small>{1}</small> : null
  }, [cartNum]) */
  return (
    <div className={styles.head}>
          <Link href="/">
            <img className={styles.logo} src="/images/logo.png" alt="logo"/>
          </Link>
          <div className={styles.search}>
            <input placeholder="search"></input>
            <img src="/images/search.png" alt="search"></img>
          </div>
          <Link href={link}>
            <div className={styles.cart}>
              <img src="/images/cart.png" alt="cart"></img>
              {cartDet}
            </div>
          </Link>
        </div>
  )
}

export default Header;