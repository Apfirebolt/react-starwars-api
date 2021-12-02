import React from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";

const getStarShips = async () => {
  const starships = await axiosInstance.get("starships");
  console.log(starships);
};

const StarShipsPage = () => {
  const { isLoading, error, data } = useQuery("starships", getStarShips);
  return <h1>Planets Page {isLoading}</h1>;
};

export default StarShipsPage;
