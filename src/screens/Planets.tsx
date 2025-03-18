import React, { useEffect, useState } from "react";
import axiosInstance from "../plugins/interceptor.js";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader.tsx";
import Pagination from "../components/Pagination.tsx";


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

interface Response {
  results: Planet[];
  count: number;
  next: string;
  previous: string;
}

const Planets: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const navigate = useNavigate();

  const goToDetails = (url: string) => {
    navigate(`/planets/${url.split("/").slice(-2)[0]}`);
  };

  const goToNextPageUtil = async () => {
    setLoading(true);
    const newPlanets = await axiosInstance.get<Response>(`planets?page=${currentPage + 1}`);
    setPlanets(newPlanets.data.results);
    setCurrentPage(currentPage + 1);
    setLoading(false);
  };

  const goToPreviousPageUtil = async () => {
    if (currentPage > 1) {
      setLoading(true);
      const newPlanets = await axiosInstance.get<Response>(`planets?page=${currentPage - 1}`);
      setPlanets(newPlanets.data.results);
      setCurrentPage(currentPage - 1);
      setLoading(false);
    }
  };

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
    <div className="bg-primary-300 pt-4">
      <h1 className="text-3xl font-bold text-center mb-4">PLANETS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {planets?.map((planet) => (
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
            <button
              className="bg-primary-100 text-primary-200 px-4 py-2 rounded mt-2"
              onClick={() => goToDetails(planet.url)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        goToNextPage={goToNextPageUtil}
        goToPreviousPage={goToPreviousPageUtil}
      />
    </div>
  );
};

export default Planets;
