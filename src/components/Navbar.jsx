import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Character } from "../pages/Character.jsx";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();


  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container d-flex">
        <div className="dropdown ms-auto">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            data-bs-auto-close="false" //  
            aria-expanded="false"
          >
            Favoritos {store.charFav.length}{" "}

          </button>

          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton"
          >
            {store.charFav.length === 0 && (
              <li className="dropdown-item text-muted">Sin favoritos</li>
            )}

            {store.charFav.map((char, index) => (
              <li
                key={index}
                className="dropdown-item d-flex justify-content-between align-items-center"
              >
                {char}
                <i
                  className="fa-solid fa-trash text-danger ms-2"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    dispatch({
                      type: "toggle",
                      payload: char,
                    })
                  }
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
