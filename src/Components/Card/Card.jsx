import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Description from "../Description/Description";
import Picture from "../Picture/Picture";
import "./Card.css";

function Card() {
  const [error, setError] = useState(null);
  const [id, setId] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${1}/`)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            setIsLoaded(true);
            setItem(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    return (
      <div className="card">
        <h2 className="title">{item.name}</h2>
        <Picture />
        <Button />
        <Description />
      </div>
    );
}
  
export default Card;