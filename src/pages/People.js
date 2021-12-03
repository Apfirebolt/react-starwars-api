import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from "../components/common/Loader";
import ErrorComponent from "../components/common/Error";

const PeoplePage = (key) => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const getPeople = async (key) => {
    const people = await axiosInstance.get(`people/?page=${page}`);
    return people.data;
  };

  const { isLoading, error, data, isPreviousData } = useQuery(
    ["people", page],
    () => getPeople(page),
    { keepPreviousData: true }
  );

  const goToDetailPage = (url) => {
    const personId = url.match('(?!x)[0-9]+');
    navigate('/people/' + personId);
  };

  return (
    <Fragment>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div>
          <h4 className="text-center text-primary my-3">PEOPLE</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Birth Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.results.map((item) => {
                  return (
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>{item.gender}</td>
                      <td>{item.height}</td>
                      <td>{item.mass}</td>
                      <td>{item.birth_year}</td>
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

export default PeoplePage;
