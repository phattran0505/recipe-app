import { Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import RecipeContainer from "./components/RecipeContainer/RecipeContainer";
import Home from "./components/home/Home";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar/>      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/recipes" element={<RecipeContainer/>} />
        <Route path="/recipes/:name" element={<RecipeDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
