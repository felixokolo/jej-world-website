import React, { Component } from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./css/AddPanel.module.css";
import Item from "./productItem";
import { headers } from "../../next.config";



const upload = async (e) => {
  let filebyte
  e.preventDefault();
  
  const reader =new FileReader();
  const file = e.target.image.files[0];
  reader.readAsDataURL(file)
  reader.onload = (event) => {filebyte = event.target.result
  const postDetails = {
    name: e.target.name.value,
    price: e.target.price.value,
    description: e.target.description.value,
    image: filebyte
  }
  fetch('/api/v1/hello', {
    method: 'POST',
    body: JSON.stringify(postDetails),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((res) => res.json())
  .then((data) => console.log(data))}
}

const AddPanel = ({ items }) => {
  return (
    <div>
      <form 
        action="#"
        onSubmit={upload}
        >
        <label htmlFor="name">Name</label>
        <input required type="text" name="name"/>
        <label htmlFor="price">Price</label>
        <input required type="text" name="price" />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10"></textarea>
        <label htmlFor="image">Select image</label>
        <input required type="file" name="image" />
        <input type="submit" value="Upload" />

        </form>
    </div>
  );
};

export default AddPanel;
