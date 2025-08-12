import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CardCharacter = (props) => { 
  
      const { store, dispatch } = useGlobalReducer();

    return (
        <>
          <div className="card mx-1" style={{ width: "18rem" }}>
            <img src={rigoImageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nombre {props.name}</h5>
              <br/>
              <h5 className="card-title">ID: {props.uid}</h5>
              <Link to={'/character/' + props.uid} className="btn btn-primary">
                Ver personaje
              </Link>
              <i className="fa-regular fa-heart mx-4" onClick={()=>dispatch({
                type: 'toggle',
                payload: props.name
              })} ></i>
            
            </div>
          </div>
        </>
  );

}