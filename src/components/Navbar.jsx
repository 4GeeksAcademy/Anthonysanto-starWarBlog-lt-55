import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	  const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div>
					{store.naveFav.map((nave,index)=>
					<p key={index}> 
					{nave} 
					<span className="mx-2" onClick={(()=>dispatch(
						    {type: 'toggle',
                			payload: nave}
					))}>x</span>
						<div className="ml-auto">
						</div>
					</p> ) }
							<span>Favoritos {store.naveFav.length }</span>
				</div>
			</div>
		</nav>
	);
};
