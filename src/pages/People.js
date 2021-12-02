import React from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";

const getPeople = async () => {
  const people = await axiosInstance.get("people");
  console.log(people);
};

const PeoplePage = () => {
  const { isLoading, error, data } = useQuery("people", getPeople);
  return <h1>People Page</h1>;
};

export default PeoplePage;
