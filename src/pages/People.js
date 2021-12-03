import React, { Fragment } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from "../components/common/Loader";
import ErrorComponent from "../components/common/Error";

const getPeople = async () => {
  const people = await axiosInstance.get("people");
  return people.data;
};

const PeoplePage = () => {
  const { isLoading, error, data } = useQuery("people", getPeople);
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
                <th>Url</th>
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

export default PeoplePage;
