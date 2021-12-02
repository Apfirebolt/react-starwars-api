import React, { Fragment } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from '../components/common/Loader';
import ErrorComponent from '../components/common/Error';

const getFilms = async () => {
  const films = await axiosInstance.get("films");
  console.log(films);
};

const FilmsPage = () => {
  const { isLoading, error, data } = useQuery("films", getFilms);
  return (
      <Fragment>
          {isLoading ? <LoaderComponent />
            : (
                <p>Films component loaded</p>
            )
          }
          {error && <ErrorComponent />}
      </Fragment>
  );
};

export default FilmsPage;
