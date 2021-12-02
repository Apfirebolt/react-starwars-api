import React, { Fragment } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from '../components/common/Loader';
import ErrorComponent from '../components/common/Error';

const getStarShips = async () => {
  const starships = await axiosInstance.get("starships");
  console.log(starships);
};

const StarShipsPage = () => {
  const { isLoading, error, data } = useQuery("starships", getStarShips);
  return (
    <Fragment>
        {isLoading ? <LoaderComponent />
            : (
                <p>Starships component loaded</p>
            )
        }
        {error && <ErrorComponent />}
    </Fragment>
);
};

export default StarShipsPage;
