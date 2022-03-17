import React from "react";
import Produit from "./Produit";
import produit from "../produit";

function Main() {

  return (
   <div>
    {produit.map((produit) => (
        <Produit key={produit.key} 
        img = {produit.image}
        reference = {produit.reference}
        title={produit.title} 
        description={produit.description}
        prix ={produit.prix} 
        quantity = {produit.quantity}
        />
      ))}
   </div>

  );
}

export default Main;
