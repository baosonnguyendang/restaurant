import React from "react";
import Header from "./Header";
import Main from "./Main";
// import Footer from "./Footer";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Main />
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
