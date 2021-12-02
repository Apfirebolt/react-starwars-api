import React from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";

const getPlanets = async () => {
  const planets = await axiosInstance.get("planets");
  console.log(planets);
};

const PlanetsPage = () => {
  const { isLoading, error, data } = useQuery("planets", getPlanets);
  return <h1>Planets Page {isLoading}</h1>;
};

export default PlanetsPage;
