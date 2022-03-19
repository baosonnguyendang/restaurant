import Header from "./header";

import '../styles/cart.css';

import Produit from "./produit";

const Cart = () => {
  const cartData = localStorage.getItem("cart");
  if (cartData !== null) {
    console.log(JSON.parse(cartData));
  }

  return (
    <>
      <Header />
      {cartData &&
        JSON.parse(cartData).map((product: any) => (
          // <Produit
          //   key={product["key"]}
          //   img={product["image"]}
          //   reference={product["reference"]}
          //   title={product["title"]}
          //   description={product["description"]}
          //   prix={product["prix"]}
          //   quantity={product["quantity"]}
          // />
          <div className='product'>
            <img src={product["img"]} alt="#" />
            <div>
              <p>{product['title']}</p>
              <p>{product["prix"]}</p>
              <p>{product["num"]}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Cart;
