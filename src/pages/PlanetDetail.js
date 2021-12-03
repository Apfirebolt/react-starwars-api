import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from "../components/common/Loader";
import ErrorComponent from "../components/common/Error";

const PlanetDetailPage = () => {
  const params = useParams();
  const getPlanetData = async () => {
    const planetData = await axiosInstance.get(`planets/${params.id}`);
    return planetData.data;
  };

  const { isLoading, error, data } = useQuery(
    ["singlePlanet"],
    () => getPlanetData()
  );
  console.log("Data is ", data);
  return (
    <Fragment>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div>
          <h4 className="text-center text-primary my-3">PLANET DETAIL PAGE</h4>
        </div>
      )}
      {error && <ErrorComponent />}
    </Fragment>
  );
};

export default PlanetDetailPage;
