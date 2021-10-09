import React from "react";

import { MovieProvider } from "./MovieProvider.jsx";


function AppProvider(props) {
  return (
    <MovieProvider>
        {props.children}
    </MovieProvider>
  );
}

export default AppProvider;