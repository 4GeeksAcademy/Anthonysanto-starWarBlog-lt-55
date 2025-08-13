import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

export const Starship = (props) => {
  const [starship, setStarship] = useState({});
  const { starshipId } = useParams();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/starships/${starshipId}`)
      .then((res) => res.json())
      .then((data) => setStarship(data.result.properties));
  }, [starshipId]);

  return (
    <>
    <div className="row align-items-start">
      <div className="col-md-6 text-center">
        <img
          src={rigoImageUrl}
          className="img-fluid"
          alt="..."
          style={{ maxWidth: "800px", height: "600px" }}
        />
      </div>
      <div className="col-md-6">
        <h1 className="text-center">{starship.name}</h1>
        <p className="text-justify mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis cupiditate quo officia minus magnam consequuntur alias iste blanditiis natus facere nesciunt consequatur, facilis nemo sit suscipit qui, molestias placeat. Quasi!
        </p>
      </div>

        <div className="container mt-4">
          <div className="mx-auto" style={{width: "80%"}}>
            <hr className="border-3" style={{color:"#c23b3bff"}}/>
          </div>
        </div>
    </div>
  <div className="container text-center mt-4">
    <div className="row text-justify">
      <div className="col">
        <strong className="text-danger">Name</strong><br />
        <span className="text-danger">{starship.name}</span>
      </div>
      <div className="col">
        <strong className="text-danger">manufacturer<br/></strong><br />
        <span className="text-danger">{starship.manufacturer}</span>
      </div>
      <div className="col">
        <strong className="text-danger">cargo <br/>capacity</strong><br />
        <span className="text-danger">{starship.cargo_capacity}</span>
      </div>
      <div className="col">
        <strong className="text-danger">consumables</strong><br />
        <span className="text-danger">{starship.consumables}</span>
      </div>
      <div className="col">
        <strong className="text-danger">starship <br/>class</strong><br />
        <span className="text-danger">{starship.starship_class}</span>
      </div>
      <div className="col">
        <strong className="text-danger">model</strong><br />
        <span className="text-danger">{starship.model}</span>
      </div>
    </div>
  </div>      
    <div className="container-fluid p-4">
      <hr className="border-4" style={{ borderColor: "#c23b3bff" }} />
    </div>
    </>
  );
};

Starship.propTypes = {
  match: PropTypes.object
};
