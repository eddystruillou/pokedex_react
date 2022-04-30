import React from "react";
import "./Picture.css";

const Picture = ({source}: {source: string}) => {
    return (
      <div className="picture">
          <img className="fit-picture" src={source} alt="" />
      </div>
    );
}
  
export default Picture;