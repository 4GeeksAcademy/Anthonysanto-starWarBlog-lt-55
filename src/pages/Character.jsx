import { Link, useParams } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Character = (props) => {
  const [character, setCharacter] = useState({});
  const { characterId } = useParams();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${characterId}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data.result.properties));
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
        <h1 className="text-center">{character.name}</h1>
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
        <span className="text-danger">{character.name}</span>
      </div>
      <div className="col">
        <strong className="text-danger">birth <br/> year</strong><br />
        <span className="text-danger">{character.birth_year}</span>
      </div>
      <div className="col">
        <strong className="text-danger">Género</strong><br />
        <span className="text-danger">{character.gender}</span>
      </div>
      <div className="col">
        <strong className="text-danger">Height</strong><br />
        <span className="text-danger">{character.height}</span>
      </div>
      <div className="col">
        <strong className="text-danger">Skin color <br/>piel</strong><br />
        <span className="text-danger">{character.skin_color}</span>
      </div>
      <div className="col">
        <strong className="text-danger">Eye Color</strong><br />
        <span className="text-danger">{character.eye_color}</span>
      </div>
    </div>
  </div>      
    <div className="container-fluid p-4">
      <hr className="border-4" style={{ borderColor: "#c23b3bff" }} />
    </div>
    </>
  );
};
Character.propTypes = {
  match: PropTypes.object
};
