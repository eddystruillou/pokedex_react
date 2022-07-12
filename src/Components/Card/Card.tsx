import ReactDOM from "react-dom";
import { PokemonFormatedData } from "../../model";
import "./Card.css";

const Card:React.FC<{isShowing: boolean, hide: any, data: PokemonFormatedData}> = ({ isShowing, hide, data }) => 
isShowing 
  ? ReactDOM.createPortal(
    <>
      <div className="card-overlay">
        <div className="card-wrapper">
          <div className="card">
            <div className="card-header">
              <button
                type="button"
                className="card-close-button"
                onClick={hide}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="card-body">
              <img className="card-picture" src={data.img} alt={data ? data.name : "#"} />
              <h2 className="card-title">{data ? data.name : ""}</h2>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
) : null
  
export default Card;