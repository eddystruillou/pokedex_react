import React from "react";
import { PokemonStats } from "../../model";
import "./Description.css";

function Description({stats}: {stats: PokemonStats[]}) {
    return (
      <div className="description">
        <hr/>
        <h3>Stats</h3>
        <ul>
          {stats.map(item =>
            <li key={item.base_stat + item.stat.name}>
              <span className="statName">{item.stat.name}</span>
              <span className="statValue">{item.base_stat}</span> 
              <progress max="200" value={item.base_stat}>
              </progress>
            </li>
          )}
        </ul>
      </div>
    );
}
  
export default Description;