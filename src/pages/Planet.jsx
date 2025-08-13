import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

export const Planet = (props) => {
  const [planet, setPlanet] = useState({});
  const { planetId } = useParams();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${planetId}`)
      .then((res) => res.json())
      .then((data) => setPlanet(data.result.properties));
  }, [planetId]);

  return (
    <>
      <Link to="/">
           <img
      src={rigoImageUrl}
      className="img-fluid"
      alt="..."
      style={{ maxWidth: "100px", height: "100px" }}
    />   
      </Link>
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
        <h1 className="text-center">{planet.name}</h1>
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
        <span className="text-danger">{planet.name}</span>
      </div>
      <div className="col">
        <strong className="text-danger">Climate<br/></strong><br />
        <span className="text-danger">{planet.climate}</span>
      </div>
      <div className="col">
        <strong className="text-danger">Population</strong><br />
        <span className="text-danger">{planet.population}</span>
      </div>
      <div className="col">
        <strong className="text-danger">Orbital</strong><br />
        <span className="text-danger">{planet.orbital_period}</span>
      </div>
      <div className="col">
        <strong className="text-danger">Rotation <br/>period</strong><br />
        <span className="text-danger">{planet.rotation_period}</span>
      </div>
      <div className="col">
        <strong className="text-danger">Diameter</strong><br />
        <span className="text-danger">{planet.diameter}</span>
      </div>
    </div>
  </div>      
    <div className="container-fluid p-4">
      <hr className="border-4" style={{ borderColor: "#c23b3bff" }} />
    </div>
    </>



    
    /*<div className="container text-center">
      <p>Nombre: {planet.name}</p>
      <p>Población: {planet.population}</p>
      <Link to="/">
        <span className="btn btn-primary btn-lg" role="button">
          Back home
        </span>
      </Link>
    </div>*/
  );
};

Planet.propTypes = {
  match: PropTypes.object
};
