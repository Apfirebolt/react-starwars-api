import React, { Fragment } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from "../components/common/Loader";
import ErrorComponent from "../components/common/Error";

const getVehicles = async () => {
  const vehicles = await axiosInstance.get("vehicles");
  return vehicles.data;
};

const VehiclesPage = () => {
  const { isLoading, error, data } = useQuery("vehicles", getVehicles);
  return (
    <Fragment>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div>
          <h4 className="text-center text-primary my-3">VEHICLES</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Model</th>
                <th>Class</th>
                <th>Manufacturer</th>
                <th>Max Speed</th>
                <th>Passengers</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.results.map((item) => {
                  return (
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>{item.model}</td>
                      <td>{item.vehicle_class}</td>
                      <td>{item.manufacturer}</td>
                      <td>{item.max_atmosphering_speed}</td>
                      <td>{item.passengers}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
      {error && <ErrorComponent />}
    </Fragment>
  );
};

export default VehiclesPage;
