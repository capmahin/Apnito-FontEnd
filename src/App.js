import "./App.css";
import NavBar from "./Page/Shared/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
