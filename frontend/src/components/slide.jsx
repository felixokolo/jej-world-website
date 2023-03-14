import React, { Component } from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./css/Slider.module.css";

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      const nextIndex = index == images.length - 1 ? 0 : index + 1;
      setIndex(nextIndex);
    }, 2500);
  });
  return (
    <div>
      <div className={styles.sliderContainer}>
        <Image
          src={images[index].url}
          alt="image"
          width={500}
          height={500}
          placeholder
        />

        <p className={styles.leftArrow + " " + styles.arrow}>&lt;</p>
        <p className={styles.rightArrow + " " + styles.arrow}>&gt;</p>
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{images[index].name}</p>
        <p className={styles.price}>{images[index].price}</p>
      </div>
    </div>
  );
};

export default Slider;
