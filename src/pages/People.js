import React, { Fragment } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from '../components/common/Loader';
import ErrorComponent from '../components/common/Error';

const getPeople = async () => {
  const people = await axiosInstance.get("people");
  console.log(people);
};

const PeoplePage = () => {
  const { isLoading, error, data } = useQuery("people", getPeople);
  return (
      <Fragment>
          {isLoading ? <LoaderComponent />
            : (
                <p>People component loaded</p>
            )
          }
          {error && <ErrorComponent />}
      </Fragment>
  );
};

export default PeoplePage;
