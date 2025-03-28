import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import HomePage from "./screens/Home.tsx";
import Planets from "./screens/Planets.tsx";
import People from "./screens/People.tsx";
import PeopleDetail from "./screens/PeopleDetail.tsx";
import PlanetDetail from "./screens/PlanetDetail.tsx";
import Starships from "./screens/Starships.tsx";
import StarshipDetail from "./screens/StarshipDetail.tsx";
import Vehicles from "./screens/Vehicles.tsx";
import VehicleDetail from "./screens/VehicleDetail.tsx";
import Films from "./screens/Films.tsx";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<PeopleDetail />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:id" element={<PlanetDetail />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/starships/:id" element={<StarshipDetail />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<VehicleDetail />} />
            <Route path="/films" element={<Films />} />
          </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
