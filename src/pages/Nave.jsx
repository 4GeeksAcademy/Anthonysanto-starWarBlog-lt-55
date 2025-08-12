import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Nave = (props) => {
  const [nave, setNave] = useState({});
  const { naveId } = useParams();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${naveId}`)
      .then((res) => res.json())
      .then((data) => setNave(data.result.properties));
  }, [naveId]);

  return (
    <div className="container text-center">
      <p>Nombre: {nave.name}</p>
      <p>Género: {nave.gender}</p>
      <p>Color de cabello: {nave.hair_color}</p>     
      <p>Color de ojos: {nave.eye_color}</p>       

      <Link to="/">
        <span className="btn btn-primary btn-lg" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

Nave.propTypes = {
  match: PropTypes.object
};
