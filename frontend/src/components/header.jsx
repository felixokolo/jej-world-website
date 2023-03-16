import styles from "./css/Header.module.css";


function Header() {
  return (
    <div className={styles.head}>
          <img className={styles.logo} src="/images/logo.png" alt="logo"></img>
          <div>
            <input placeholder="search"></input>
            <img src="/images/search.png" alt="search"></img>
          </div>
          <img className={styles.cart} src="/images/cart.png" alt="cart"></img>
        </div>
  )
}

export default Header;