import React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";


function Navigation() {
const location=useLocation();
console.log(location);


  const menu = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Profiles", path: "/profile" },
  ];

  return (
    <ul style={{display:"flex", justifyContent:"space-evenly" ,padding:"1rem", backgroundColor:"grey" ,listStyleType:"none"}}>
      {menu.map((item, index) => {
        return <li key={index}>
          <Link style={{ textDecoration:"none" ,color:item.path===location.pathname?"blue":"white"}} to={item.path}>{item.name}</Link>
        </li>;
      })}
    </ul>
  );
}

export default Navigation;
