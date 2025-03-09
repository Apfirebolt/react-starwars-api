import React, { useEffect, useState } from "react";
import axiosInstance from "../plugins/interceptor.js";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader.jsx";

interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

const Planets: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axiosInstance
      .get("planets")
      .then((response) => {
        setPlanets(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-primary-300 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center mb-4">Planets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {planets.map((planet) => (
          <div key={planet.url} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">{planet.name}</h2>
            <p>
              <strong>Climate:</strong> {planet.climate}
            </p>
            <p>
              <strong>Terrain:</strong> {planet.terrain}
            </p>
            <p>
              <strong>Population:</strong> {planet.population}
            </p>
            <p>
              <strong>Diameter:</strong> {planet.diameter}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
