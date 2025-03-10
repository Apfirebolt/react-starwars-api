import React, { useEffect, useState } from "react";
import axiosInstance from "../plugins/interceptor.js";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader.jsx";

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
  data: {
    results: Vehicle[];
  };
  count: number;
  next: string;
  previous: string;
}

const Vehicles: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axiosInstance
      .get("vehicles")
      .then((response: Response) => {
        setVehicles(response.data.results);
        setLoading(false);
      })
      .catch((error: any) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-primary-300 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center mb-4">Vehicles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicles.map((vehicle) => (
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
            <p>
              <strong>Max Atmosphering Speed:</strong>{" "}
              {vehicle.max_atmosphering_speed}
            </p>
            <p>
              <strong>Crew:</strong> {vehicle.crew}
            </p>
            <p>
              <strong>Url:</strong>
              <a href={vehicle.url}>{vehicle.url}</a>
            </p>
            <p>
              <strong>Appeared in Movies:</strong>{" "}
              {vehicle.films.length > 0 ? vehicle.films.join(", ") : "None"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
