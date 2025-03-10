import React, { useEffect, useState } from "react";
import axiosInstance from "../plugins/interceptor.js";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader.tsx";

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

const PlanetDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axiosInstance
      .get<Planet>(`planets/${id}`)
      .then((response) => {
        setPlanet(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!planet) {
    return <div>Planet not found</div>;
  }

  return (
    <div className="bg-primary-300 pt-4">
      <h1 className="text-3xl font-bold text-center mb-4">{planet.name}</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <p>
          <strong>Rotation Period:</strong> {planet.rotation_period}
        </p>
        <p>
          <strong>Orbital Period:</strong> {planet.orbital_period}
        </p>
        <p>
          <strong>Diameter:</strong> {planet.diameter}
        </p>
        <p>
          <strong>Climate:</strong> {planet.climate}
        </p>
        <p>
          <strong>Gravity:</strong> {planet.gravity}
        </p>
        <p>
          <strong>Terrain:</strong> {planet.terrain}
        </p>
        <p>
          <strong>Surface Water:</strong> {planet.surface_water}
        </p>
        <p>
          <strong>Population:</strong> {planet.population}
        </p>
      </div>
    </div>
  );
};

export default PlanetDetail;
