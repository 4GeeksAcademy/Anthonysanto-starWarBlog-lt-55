import { useEffect, useState } from "react";
import { CardCharacter } from "../components/CardCharacter.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CardPlanet } from "../components/CardPlanet.jsx";
import { CardStarship } from "../components/CardStarship.jsx";
import { Character } from "./Character.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [characters, setCharacters] = useState([]);
  const [planetas, setPlanetas] = useState([]);
  const [starship, setStarship] = useState([]);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/people')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

    useEffect(() => {
    fetch('https://www.swapi.tech/api/planets')
      .then((res) => res.json())
      .then((data) => setPlanetas(data.results));
  }, []);

    useEffect(() => {
    fetch('https://www.swapi.tech/api/starships')
      .then((res) => res.json())
      .then((data) => setStarship(data.results));
  }, []);

  return (
    <>
      <h1 className="text-danger">Personajes</h1>
      <div className="row flex-row flex-nowrap overflow-x-auto">
        {characters.map((character) => (
          <CardCharacter
            key={character.uid}
            name={character.name}
            uid={character.uid}
          />
        ))}
      </div>

	  <h1 className="text-danger" >Planetas</h1>
      <div className="row flex-row flex-nowrap overflow-x-auto"> 
		 {planetas.map((planeta) => (
          <CardPlanet
            key={planeta.uid}
            name={planeta.name}
            uid={planeta.uid}
          />
        ))}
	  </div>

    <h1 className="text-danger" >Naves</h1>
      <div className="row flex-row flex-nowrap overflow-x-auto"> 
		 {starship.map((starship) => (
          <CardStarship
            key={starship.uid}
            name={starship.name}
            uid={starship.uid}
          />
        ))}
	  </div>
    </>
  );
};
