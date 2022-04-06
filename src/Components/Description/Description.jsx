import React from "react";
import "./Description.css";

function Description(props) {
    return (
      <div className="description">
        <h3>Stats</h3>
        <ul>
          {props.stats.map(item =>
            <li key={item.base_stat + item.stat.name}>
            <span>{item.stat.name}</span>: <span>{item.base_stat}</span>
            </li>
          )}
        </ul>
      </div>
    );
}
  
export default Description;