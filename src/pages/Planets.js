import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from "../components/common/Loader";
import ErrorComponent from "../components/common/Error";



const PlanetsPage = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const getPlanets = async () => {
    const planets = await axiosInstance.get(`planets/?page=${page}`);
    return planets.data;
  };

  const { isLoading, error, data, isPreviousData } = useQuery(
    ["planets", page],
    () => getPlanets(page),
    { keepPreviousData: true }
  );

  const goToDetailPage = (url) => {
    const planetId = url.match('(?!x)[0-9]+');
    navigate('/planets/' + planetId);
  };

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
                <th>Actions</th>
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
                      <td>
                        <button className="btn btn-success" onClick={() => goToDetailPage(item.url)}>Details</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="paginator">
            <button
              className="btn btn-primary m-2"
              onClick={() => setPage((old) => Math.max(old - 1, 1))}
              disabled={page === 1}
            >
              Previous Page
            </button>{" "}
            <span>{page}</span>
            <button
              className="btn btn-secondary m-2"
              onClick={() => {
                if (!isPreviousData && data.next) {
                  setPage((old) => old + 1);
                }
              }}
              // Disable the Next Page button until we know a next page is available
              disabled={isPreviousData || !data?.next}
            >
              Next Page
            </button>
          </div>
        </div>
      )}
      {error && <ErrorComponent />}
    </Fragment>
  );
};

export default PlanetsPage;
