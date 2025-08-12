import { useEffect, useState } from "react";
import { CardNave } from "../components/CardNave.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CardPlanet } from "../components/CardPlanet.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [naves, setNaves] = useState([]);
  const [planetas, setPlanetas] = useState([]);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/people')
      .then((res) => res.json())
      .then((data) => setNaves(data.results));
  }, []);

    useEffect(() => {
    fetch('https://www.swapi.tech/api/planets')
      .then((res) => res.json())
      .then((data) => setPlanetas(data.results));
  }, []);

  return (
    <>
      <h1 className="text-danger">Personajes</h1>
      <div className="row flex-row flex-nowrap overflow-x-auto">
        {naves.map((nave) => (
          <CardNave
            key={nave.uid}
            name={nave.name}
            uid={nave.uid}
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
    </>
  );
};
