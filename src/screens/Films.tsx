import React from "react";
import { useQuery } from "react-query";
import Loader from "../components/Loader.tsx";
import axiosInstance from "../plugins/interceptor.js";

interface Movie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

interface MoviesResponse {
  results: Movie[];
  count: number;
  next: string;
  previous: string;
}

const retrieveMovies = async (): Promise<MoviesResponse> => {
  const response = await axiosInstance.get<MoviesResponse>("films");
  return response.data;
};

const Movies: React.FC = () => {
  const {
    data: movies,
    error,
    isLoading,
  } = useQuery<MoviesResponse, Error>("postsData", retrieveMovies);

  if (isLoading) return <Loader />;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="bg-primary-300">
      <h1 className="text-2xl font-bold text-center mb-4">Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies?.results.map((movie) => (
          <div key={movie.url} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <p>
              <strong>Director:</strong> {movie.director}
            </p>
            <p>
              <strong>Producer:</strong> {movie.producer}
            </p>
            <p>
              <strong>URL:</strong> {movie.url}
            </p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Movies;

