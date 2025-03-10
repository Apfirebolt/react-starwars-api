import React, { useEffect, useState } from "react";
import axiosInstance from "../plugins/interceptor.js";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader.tsx";
import Pagination from "../components/Pagination.tsx";

interface Vehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

interface Response {
  results: Vehicle[];
  count: number;
  next: string;
  previous: string;
}

const Vehicles: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const navigate = useNavigate();

  const goToDetails = (url: string) => {
    navigate(`/vehicles/${url.split("/").slice(-2)[0]}`);
  };

  const goToNextPageUtil = async () => {
    setLoading(true);
    const newVehicles = await axiosInstance.get<Response>(
      `vehicles?page=${currentPage + 1}`
    );
    setVehicles(newVehicles.data.results);
    setCurrentPage(currentPage + 1);
    setLoading(false);
  };

  const goToPreviousPageUtil = async () => {
    if (currentPage > 1) {
      setLoading(true);
      const newVehicles = await axiosInstance.get<Response>(
        `vehicles?page=${currentPage - 1}`
      );
      setVehicles(newVehicles.data.results);
      setCurrentPage(currentPage - 1);
      setLoading(false);
    }
  };

  useEffect(() => {
    axiosInstance
      .get<Response>("vehicles")
      .then((response) => {
        setVehicles(response.data.results);
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
      <h1 className="text-3xl font-bold text-center mb-4">VEHICLES</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicles?.map((vehicle) => (
          <div key={vehicle.url} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">{vehicle.name}</h2>
            <p>
              <strong>Model:</strong> {vehicle.model}
            </p>
            <p>
              <strong>Manufacturer:</strong> {vehicle.manufacturer}
            </p>
            <p>
              <strong>Cost:</strong> {vehicle.cost_in_credits} credits
            </p>
            <p>
              <strong>Length:</strong> {vehicle.length}
            </p>
            <button
              className="bg-primary-500 text-black px-4 py-2 rounded mt-2"
              onClick={() => goToDetails(vehicle.url)}
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

export default Vehicles;
