import React from "react";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Main from "./pages/Main";

function App() {
  return (
    <>
      <Main />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
