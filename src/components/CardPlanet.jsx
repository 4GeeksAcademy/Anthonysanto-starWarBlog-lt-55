import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

export const CardPlanet = (props) => (
  <div className="card mx-1" style={{ width: "18rem" }}>
    <img src={rigoImageUrl} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <Link to={'/Planet/' + props.uid} className="btn btn-primary">
        Ver planeta
      </Link>
    </div>
  </div>
);