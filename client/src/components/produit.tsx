import React, { useState } from "react";

import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import "../styles/produit.css";

function Produit(props: any) {
  const [num, setNum] = useState(0);

  const IncrementItem = () => {
    setNum(num + 1);
  };
  const DecreaseItem = () => {
    setNum(num - 1);
  };

  const addToCart = (): void => {
    const addCart = { ...props, num: num }
    console.log(addCart);
    const cartExisted = localStorage.getItem('cart');
    if (!cartExisted) {
      localStorage.setItem('cart', JSON.stringify([addCart]));
    } else {
      let cartStorage: any[] = JSON.parse(cartExisted);
      if (cartStorage.some((x:any) => x.reference === props.reference)) {
        cartStorage = cartStorage.map((x:any) => x.reference === props.reference ? addCart : x);
      } else {
        cartStorage.push(addCart);
      }
      localStorage.setItem('cart', JSON.stringify(cartStorage));
    }
    console.log(localStorage.getItem('cart'))
  }

  return (
    <div className="produit">
      <img src={props.img} alt="avata" />
      <h1>
        {props.reference}. {props.title}
      </h1>
      <div className="action">
        <strong><p>{props.prix}$</p></strong>
        <div>
          <button onClick={DecreaseItem}>-</button>
          <span> {num} </span>
          <button onClick={IncrementItem}>+</button>
        </div>
        <Button onClick={addToCart} variant="outlined" startIcon={<AddShoppingCartIcon />}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default Produit;
