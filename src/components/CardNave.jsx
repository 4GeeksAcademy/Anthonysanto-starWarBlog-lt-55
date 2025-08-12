import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CardNave = (props) => { 
  
      const { store, dispatch } = useGlobalReducer();

    return (
        <>
          <div className="card mx-1" style={{ width: "18rem" }}>
            <img src={rigoImageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <Link to={'/nave/' + props.uid} className="btn btn-primary">
                Ver personaje
              </Link>
              <i className="fa-regular fa-heart mx-2" onClick={()=>dispatch({
                type: 'toggle',
                payload: props.name
              })} ></i>
            
            </div>
          </div>
        </>
  );

}