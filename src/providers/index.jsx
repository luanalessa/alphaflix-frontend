import React from "react";

import { MovieProvider } from "./MovieProvider.jsx";
import { CartProvider } from "./CartProvider.jsx";



function AppProvider(props) {
  return (
    <MovieProvider>
      <CartProvider>
        {props.children}
      </CartProvider>
    </MovieProvider>
  );
}

export default AppProvider;