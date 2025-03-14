import React, { useEffect, useState } from "react";
import axiosInstance from "../plugins/interceptor.js";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader.tsx";

interface Starship {
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
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

const StarshipDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [starship, setStarship] = useState<Starship | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axiosInstance
      .get<Starship>(`starships/${id}`)
      .then((response) => {
        setStarship(response.data);
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

  if (!starship) {
    return <div>Starship not found</div>;
  }

  return (
    <div className="bg-primary-300 pt-4">
      <h1 className="text-3xl font-bold text-center mb-4">{starship.name}</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <p>
          <strong>Model:</strong> {starship.model}
        </p>
        <p>
          <strong>Manufacturer:</strong> {starship.manufacturer}
        </p>
        <p>
          <strong>Cost:</strong> {starship.cost_in_credits} credits
        </p>
        <p>
          <strong>Length:</strong> {starship.length}
        </p>
        <p>
          <strong>Max Atmosphering Speed:</strong>{" "}
          {starship.max_atmosphering_speed}
        </p>
        <p>
          <strong>Crew:</strong> {starship.crew}
        </p>
        <p>
          <strong>Passengers:</strong> {starship.passengers}
        </p>
        <p>
          <strong>Cargo Capacity:</strong> {starship.cargo_capacity}
        </p>
        <p>
          <strong>Consumables:</strong> {starship.consumables}
        </p>
        <p>
          <strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}
        </p>
        <p>
          <strong>MGLT:</strong> {starship.MGLT}
        </p>
        <p>
          <strong>Starship Class:</strong> {starship.starship_class}
        </p>
      </div>
    </div>
  );
};

export default StarshipDetail;
