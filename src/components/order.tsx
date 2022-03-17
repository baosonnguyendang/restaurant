import React from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Produit from "./produit";
import Header from "./header";

import produit from "../produit";

import "../styles/order.css";

interface CategoryFilter {
  id: number;
  name: string;
  check: boolean;
}

function Order() {
  const categories: CategoryFilter[] = [
    {
      id: 0,
      name: "Sushi",
      check: false,
    },
    {
      id: 1,
      name: "Sashimi",
      check: false,
    },
    {
      id: 2,
      name: "Yasuo",
      check: false,
    },
  ];

  return (
    <>
      <Header></Header>
      <div className="order">
        <div className="filter">
          <p>Category</p>
          <FormGroup>
            {categories.map((category) => (
              <FormControlLabel control={<Checkbox />} label={category.name} />
            ))}
          </FormGroup>
        </div>
        <div>
          {produit.map((produit) => (
            <Produit
              key={produit.key}
              img={produit.image}
              reference={produit.reference}
              title={produit.title}
              description={produit.description}
              prix={produit.prix}
              quantity={produit.quantity}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Order;
