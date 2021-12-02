import React from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";

const getFilms = async () => {
  const films = await axiosInstance.get("films");
  console.log(films);
};

const FilmsPage = () => {
  const { isLoading, error, data } = useQuery("films", getFilms);
  return <h1>Films Page</h1>;
};

export default FilmsPage;
