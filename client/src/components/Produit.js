import React from "react";

function Produit(props) {
  return (
    <div >
    <div className="produit">
      <img src={props.img} alt="avata" />
      <h1>{props.reference}. {props.title}</h1>
      <p>{props.prix}</p>
    </div>
    </div>
  );
}

export default Produit;
