import React from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";

const getVehicles = async () => {
  const vehicles = await axiosInstance.get("vehicles");
  console.log(vehicles);
};

const VehiclesPage = () => {
  const { isLoading, error, data } = useQuery("vehicles", getVehicles);
  return <h1>Vehicles Page {isLoading}</h1>;
};

export default VehiclesPage;
