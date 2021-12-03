import React, { Fragment } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from "../components/common/Loader";
import ErrorComponent from "../components/common/Error";

const getPlanets = async () => {
  const planets = await axiosInstance.get("planets");
  return planets.data;
};

const PlanetsPage = () => {
  const { isLoading, error, data } = useQuery("planets", getPlanets);
  return (
    <Fragment>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div>
          <h4 className="text-center text-primary my-3">PLANETS</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Climate</th>
                <th>Population</th>
                <th>Terrain</th>
                <th>Rotation Period</th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.results.map((item) => {
                  return (
                    <tr key={item.name}>
                      <td>{item.name}</td>  
                      <td>{item.climate}</td>
                      <td>{item.population}</td>
                      <td>{item.terrain}</td>
                      <td>{item.rotation_period}</td>
                      <td>{item.url}</td>
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

export default PlanetsPage;
