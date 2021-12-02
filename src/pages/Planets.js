import React, { Fragment } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from '../components/common/Loader';
import ErrorComponent from '../components/common/Error';

const getPlanets = async () => {
    const planets = await axiosInstance.get("planets");
    console.log(planets);
};

const PlanetsPage = () => {
    const { isLoading, error, data } = useQuery("planets", getPlanets);
    return (
        <Fragment>
            {isLoading ? <LoaderComponent />
                : (
                    <p>Planets component loaded</p>
                )
            }
            {error && <ErrorComponent />}
        </Fragment>
    );
};

export default PlanetsPage;
