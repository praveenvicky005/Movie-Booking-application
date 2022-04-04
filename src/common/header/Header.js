import React from "react";
import "./Header.css";
import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img id="logo" src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg"  alt="logo"/>
      </div>
    );
  }
}

export default Header;
