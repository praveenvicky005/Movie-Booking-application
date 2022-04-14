import React from "react";
import Header from "../../common/header/Header";
import { Button } from "@material-ui/core";
import "./Details.css";
import moviesData from '../../common/MoviesData'

export default function Details() {
  return (
    <div>
      <Header title="Details" />
      <Button variant="text">{"<Back to Home"}</Button>
      <div id="content-cont">
        <div id="one">
          <img src="" a alt=""/>
        </div>
        <div id="two">
         <span>{}</span>
        </div>
        <div id="three">
         
        </div>
      </div>
    </div>
  );
}
