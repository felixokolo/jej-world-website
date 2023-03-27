import React, { Component, use } from "react";
import { useState } from "react";
import styles from "./css/AddPanel.module.css";
import { useRouter } from "next/router";

let state;
let state2
let state3

const upload = async (e) => {
  e.preventDefault();
  const file = e.target.image.files[0];
  const reader = new Promise(async (resolve, reject) => {
    const fileReader =  new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result)
    }
    
  }) 
  const result = await reader
    const details = {
      "name": e.target.name.value,
      "price": e.target.price.value,
      "description": e.target.description.value,
      "image": result
    }
    const resp = await fetch(`/api/v1/dbedit?${new URLSearchParams({collection: "products"})}`, {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (resp.status === 200) {
      const res = await resp.json()
      console.log(res)
      state3.reload(window.location.pathname)
    }
};



const imageSelected = (e) => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const type = file.type.split('/')[0];
  const size = file.size;

  if (type !== 'image') {
    state2('Must be an image')
    return;
  }

  if (size > 2097152) {
    state2('Image size should be less than 2MB')
    return
  }

  state2('')
  state(<img className={styles.preview} src={url} alt="Preview" />);
  document.getElementById("upload").disabled=false
}


const AddPanel = () => {
  const [imagePreview, setimagePreview] = useState(null);
  const [imageError, setimageError] = useState('');
  const router = useRouter();
  state = setimagePreview;
  state2 = setimageError;
  state3 = router
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
          <div>
            <input onChange={imageSelected} required type="file" name="image" />
            <small>{imageError}</small>
            </div>
          <br />
          {imagePreview}
          <input disabled id="upload" type="submit" value="Upload" />
        </div>
      </form>
    </div>
  );
};

export default AddPanel;
