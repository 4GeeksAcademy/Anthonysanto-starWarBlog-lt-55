import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { CardNave } from "../components/CardNave.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const [naves,setNaves]= useState([])
 

	useEffect(()=>{
		console.log('cargado')
		fetch('https://www.swapi.tech/api/starships')
		.then((res)=> res.json())
		.then((data)=>setNaves(data.results) )
	},[])
	return (
		<>
		<h1>Naves</h1>
		{naves.map((nave)=> <CardNave key={nave.uid} name={nave.name} uid={nave.uid} /> )}
		</>   
	);
}; 
