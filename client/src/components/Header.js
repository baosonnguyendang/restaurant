import React from "react";

function Header() {

  return (
   
    <header className="row">
      <div>
      <a href="index.html"><h1>Sushi Shop</h1></a>
      </div>
      <div >
          <a className="item_head" href="./">Home</a>
          <a className="item_head" href="Gallery.html">Gallery</a>
          <a href='./' className='order-online'><span>Order Online</span></a>          
          <a className="item_head" href="signin.html">Sign In</a>

      </div>
    </header>
  );
}

export default Header;
