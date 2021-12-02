import React, { Fragment } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from "../components/common/Loader";
import ErrorComponent from "../components/common/Error";

const getFilms = async () => {
  const films = await axiosInstance.get("films");
  return films.data;
};

const FilmsPage = () => {
  const { isLoading, error, data } = useQuery("films", getFilms);
  return (
    <Fragment>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div>
          <h4 className="text-center text-primary my-3">
            FILMS
          </h4>  
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Director</th>
                <th>Producer</th>
                <th>Release Date</th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.results.map((item) => {
                  return (
                    <tr key={item.episode_id}>
                      <td>{item.title}</td>
                      <td>{item.director}</td>
                      <td>{item.producer}</td>
                      <td>{item.release_date}</td>
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

export default FilmsPage;
