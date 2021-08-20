import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Blog from "./Blog";

function NavComponents() {
  let navStyle = {
    width: "auto",
    height: 50,
    backgroundColor: "green",
    color: "white",
    listStyle: "none",
    padding: "15px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  };
  return (
    <ul style={navStyle}>
      <Home />
      <Contact />
      <About />
      <Blog />
    </ul>
  );
}
export default NavComponents;
