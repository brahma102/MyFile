import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Imagecard from "./components/Imagecard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <>
    

      <Routes>
        {/* <Route element={<PrivateRoutes  /> } > */}
        <Route path="/upload" element={<Imagecard />} />
        <Route path="/home" element={  <Header />} />
        {/* </Route> */}
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
