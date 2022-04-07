import React from "react";
import "./Description.css";

function Description({stats}) {
    return (
      <div className="description">
        <h3>Stats</h3>
        <ul>
          {stats.map(item =>
            <li key={item.base_stat + item.stat.name}>
            <span>{item.stat.name}</span>: <span>{item.base_stat}</span>
            </li>
          )}
        </ul>
      </div>
    );
}
  
export default Description;