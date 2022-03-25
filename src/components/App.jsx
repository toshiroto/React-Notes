
import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

render(<App />, document.getElementById("root"));
