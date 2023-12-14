import { Link } from "react-router-dom";

import "./Home.css"
function Home() {
    return ( <div className="container">
        <h1 className="home-title">
            amazing recipes
        </h1>
        <Link className="search" to="/recipes">search recipes</Link>
    </div> );
}

export default Home;