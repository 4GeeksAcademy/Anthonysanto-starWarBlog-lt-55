import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CardCharacter = (props) => { 
  
      const { store, dispatch } = useGlobalReducer();
  const isFavorite = store.charFav.includes(props.name);
    return (
        <>
          <div className="card mx-1" style={{ width: "18rem" }}>
            <img src={rigoImageUrl} className="card-img-top" alt="..." style={{ maxWidth: "400px", height: "200px" }}/>
            <div className="card-body">
              <h5 className="card-title">Nombre {props.name}</h5>
              <br/>
              <h5 className="card-title">ID: {props.uid}</h5>
              <Link to={'/character/' + props.uid} className="btn btn-primary">
                Ver personaje
              </Link>
          <i
            className={isFavorite ? "fa-solid fa-heart mx-4" : "fa-regular fa-heart mx-4"}
            style={{ color: isFavorite ? "red" : "black", cursor: "pointer" }}
            onClick={() =>
              dispatch({
                type: "toggle",
                payload: props.name
              })
            }
          ></i>
            
            </div>
          </div>
        </>
  );

}