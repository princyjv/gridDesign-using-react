import React from 'react';
import "./styles.css";
import Left from "./Left";
import Right from "./Right";
 function Header() {
  
  return (
    <div className="App">
      <div className="topbar">
      <div className="flex-container">
      <Left/>
      <Right/>
      </div>
      </div>
      </div>
  );
}
export default Header;
