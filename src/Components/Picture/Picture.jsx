import React from "react";
import "./Picture.css";

function Picture({source}) {
  console.log("rendu Picture")
    return (
      <div className="picture">
          <img className="fit-picture" src={source} alt="" />
      </div>
    );
}
  
export default Picture;