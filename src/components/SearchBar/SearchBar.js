import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./SearchBar.css";
function SearchBar({ value, onChange, handleSubmit }) {
  return (
    <div className="recipe-header">
      <h1>
        search recipe with <span>My Restaurant</span>
      </h1>
      <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input id="search" type="text" placeholder="Search Recipes" value={value} onChange={onChange}></input>
            <span>
              <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
            </span>
          </div>
      </form>
    </div>
  );
}

export default SearchBar;
