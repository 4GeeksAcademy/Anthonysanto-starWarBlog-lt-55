import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Planet = (props) => {
  const [planet, setPlanet] = useState({});
  const { planetId } = useParams();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${planetId}`)
      .then((res) => res.json())
      .then((data) => setPlanet(data.result.properties));
  }, [planetId]);

  return (
    <div className="container text-center">
      <p>Nombre: {planet.name}</p>
      <p>Población: {planet.population}</p>

      <Link to="/">
        <span className="btn btn-primary btn-lg" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

Planet.propTypes = {
  match: PropTypes.object
};
