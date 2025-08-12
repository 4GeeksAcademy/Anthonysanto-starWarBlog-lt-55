import { Link, useParams } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Nave = (props) => {
  const [nave, setNave] = useState({});
  const { naveId } = useParams();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${naveId}`)
      .then((res) => res.json())
      .then((data) => setNave(data.result.properties));
  }, []);

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
        <h1 className="text-center">{nave.name}</h1>
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
        <span className="text-danger">{nave.name}</span>
      </div>
      <div className="col">
        <strong className="text-danger">birth <br/> year</strong><br />
        <span className="text-danger">{nave.birth_year}</span>
      </div>
      <div className="col">
        <strong className="text-danger">Género</strong><br />
        <span className="text-danger">{nave.gender}</span>
      </div>
      <div className="col">
        <strong className="text-danger">Height</strong><br />
        <span className="text-danger">{nave.height}</span>
      </div>
      <div className="col">
        <strong className="text-danger">Skin color <br/>piel</strong><br />
        <span className="text-danger">{nave.skin_color}</span>
      </div>
      <div className="col">
        <strong className="text-danger">Eye Color</strong><br />
        <span className="text-danger">{nave.eye_color}</span>
      </div>
    </div>
  </div>      
    <div className="container-fluid p-4">
      <hr className="border-4" style={{ borderColor: "#c23b3bff" }} />
    </div>
    </>
  );
};

Nave.propTypes = {
  match: PropTypes.object
};
