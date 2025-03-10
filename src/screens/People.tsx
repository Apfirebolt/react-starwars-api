import React from "react";
import { useQuery } from "react-query";
import Loader from "../components/Loader.tsx";
import axiosInstance from "../plugins/interceptor.js";

interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

interface PeopleResponse {
  results: Person[];
  count: number;
  next: string;
  previous: string;
}

const retrievePeople = async (): Promise<PeopleResponse> => {
  const response = await axiosInstance.get<PeopleResponse>("people");
  return response.data;
};

const People: React.FC = () => {
  const {
    data: people,
    error,
    isLoading,
  } = useQuery<PeopleResponse, Error>("peopleData", retrievePeople);

  if (isLoading) return <Loader />;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="bg-primary-300">
      <h1 className="text-2xl font-bold text-center mb-4">People</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {people?.results.map((person) => (
          <div key={person.url} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">{person.name}</h2>
            <p>
              <strong>Height:</strong> {person.height}
            </p>
            <p>
              <strong>Mass:</strong> {person.mass}
            </p>
            <p>
              <strong>Hair Color:</strong> {person.hair_color}
            </p>
            <p>
              <strong>Skin Color:</strong> {person.skin_color}
            </p>
            <p>
              <strong>Eye Color:</strong> {person.eye_color}
            </p>
            <p>
              <strong>Birth Year:</strong> {person.birth_year}
            </p>
            <p>
              <strong>Gender:</strong> {person.gender}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
