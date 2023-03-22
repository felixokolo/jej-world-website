import { useRouter } from "next/router";
import styles from "./css/Header.module.css";
import Link from "next/link";


function Header() {
  const router = useRouter();

  const goHome = () => {
    router.push("/")
  }
  return (
    <div className={styles.head}>
          <Link href="/"><img className={styles.logo} src="/images/logo.png" alt="logo">
          </img></Link>
          <div>
            <input placeholder="search"></input>
            <img src="/images/search.png" alt="search"></img>
          </div>
          <img className={styles.cart} src="/images/cart.png" alt="cart"></img>
        </div>
  )
}

export default Header;