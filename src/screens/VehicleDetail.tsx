import React, { useEffect, useState } from "react";
import axiosInstance from "../plugins/interceptor.js";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader.tsx";

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

const VehicleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axiosInstance
      .get<Vehicle>(`vehicles/${id}`)
      .then((response) => {
        setVehicle(response.data);
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

  if (!vehicle) {
    return <div>Vehicle not found</div>;
  }

  return (
    <div className="bg-primary-300 pt-4">
      <h1 className="text-3xl font-bold text-center mb-4">{vehicle.name}</h1>
      <div className="bg-white p-4 rounded shadow-md">
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
          <strong>Passengers:</strong> {vehicle.passengers}
        </p>
        <p>
          <strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}
        </p>
        <p>
          <strong>Consumables:</strong> {vehicle.consumables}
        </p>
        <p>
          <strong>Vehicle Class:</strong> {vehicle.vehicle_class}
        </p>
      </div>
    </div>
  );
};

export default VehicleDetail;
