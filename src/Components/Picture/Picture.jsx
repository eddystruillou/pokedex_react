import React from "react";
import "./Picture.css";

function Picture(props) {
  console.log(props)
    return (
      <div className="picture">
          <img className="fit-picture" src={props.source} alt="" />
      </div>
    );
}
  
export default Picture;