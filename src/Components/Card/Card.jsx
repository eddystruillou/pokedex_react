import React from "react";
import Button from "../Button/Button";
import Description from "../Description/Description";
import Picture from "../Picture/Picture";
import "./Card.css";

function Card() {
    return (
      <div className="card">
        <h2 className="title">Title of the pokemon</h2>
        <Picture />
        <Button />
        <Description />
      </div>
    );
}
  
export default Card;