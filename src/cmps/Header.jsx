
import React from "react";
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="full flex space-between">
      <div className="full flex space-between ">

        <NavLink to={"/books"}> 
        <h1>Books & Co</h1>
        </NavLink>
        <div className="flex nav">
          <NavLink to={"/books"}>
            <h2>Books</h2>
          </NavLink>
          <NavLink to={`/`}>
            <h2>Signup</h2>
          </NavLink>
        </div>
      </div>
    </header>
  );
}









