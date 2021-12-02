import React, { Fragment } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from '../components/common/Loader';
import ErrorComponent from '../components/common/Error';

const getVehicles = async () => {
    const vehicles = await axiosInstance.get("vehicles");
    console.log(vehicles);
};

const VehiclesPage = () => {
    const { isLoading, error, data } = useQuery("vehicles", getVehicles);
    return (
        <Fragment>
            {isLoading ? <LoaderComponent />
                : (
                    <p>Vehicles component loaded</p>
                )
            }
            {error && <ErrorComponent />}
        </Fragment>
    );
};

export default VehiclesPage;
