import React, { Component } from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./css/AddPanel.module.css";
import Item from "./productItem";
import { headers } from "../../next.config";

const upload = async (e) => {
  let filebyte;
  e.preventDefault();

  const reader = new FileReader();
  const file = e.target.image.files[0];
  reader.readAsDataURL(file);
  reader.onload = (event) => {
    filebyte = event.target.result;
    const postDetails = {
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      image: filebyte,
    };
    fetch("/api/v1/hello", {
      method: "POST",
      body: JSON.stringify(postDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
};

const AddPanel = ({ items }) => {
  return (
    <div>
      <form action="#" onSubmit={upload}>
        <div className={styles.form}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            className={styles.input_area}
            required
            type="text"
            name="name"
          />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <input
            className={styles.input_area}
            required
            type="text"
            name="price"
          />
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            className={styles.input_area}
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <label htmlFor="image">Select image</label>
          <br />
          <input required type="file" name="image" />
          <br />
          <input type="submit" value="Upload" />
        </div>
      </form>
    </div>
  );
};

export default AddPanel;
