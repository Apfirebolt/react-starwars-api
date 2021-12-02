import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'spectre.css';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/Home";
import PeoplePage from "./pages/People";
import PlanetsPage from "./pages/Planets";
import StarShipPage from "./pages/Starships";
import VehiclePage from "./pages/Vehicles";
import FilmsPage from "./pages/Films";

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/people" element={<PeoplePage/>} />
          <Route path="/vehicles" element={<VehiclePage/>} />
          <Route path="/ships" element={<StarShipPage/>} />
          <Route path="/planets" element={<PlanetsPage/>} />
          <Route path="/films" element={<FilmsPage/>} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
