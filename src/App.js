import "./App.css";
import NavBar from "./Page/Shared/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Opportunitie from "./Page/Opportunitie/Opportunitie";
import Contect from "./Page/Contect/Contect";
import Footer from "./Page/Shared/Footer";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="contect" element={<Contect></Contect>}></Route>
        <Route
          path="Opportunitie"
          element={<Opportunitie></Opportunitie>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
