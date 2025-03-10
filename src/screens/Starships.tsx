import React, { useEffect, useState } from "react";
import axiosInstance from "../plugins/interceptor.js";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader.jsx";

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

interface Response {
  data: {
    results: Starship[];
  };
  count: number;
  next: string;
  previous: string;
}

const Starships: React.FC = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axiosInstance
      .get("starships")
      .then((response: Response) => {
        setStarships(response.data.results);
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
      <h1 className="text-2xl font-bold text-center mb-4">Starships</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {starships.map((starship) => (
          <div key={starship.url} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">{starship.name}</h2>
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
                <strong>Url:</strong>
                <a href={starship.url}>{starship.url}</a>
            </p>
            <p>
                <strong>Appeared in Movies:</strong> {starship.films.length > 0 ? starship.films.join(", ") : "None"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Starships;
