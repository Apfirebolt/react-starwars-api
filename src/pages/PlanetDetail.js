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

  const { isLoading, error, data } = useQuery(["singlePlanet"], () =>
    getPlanetData()
  );

  return (
    <Fragment>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div>
          <h4 className="text-center text-primary my-3">{data.name}</h4>
          <div className="card">
            <div className="card-body">
              <div className="card-subtitle text-primary">
                <p>Climate : {data.climate}</p>
                <p>Diameter : {data.diameter}</p>
                <p>Gravity : {data.gravity}</p>
                <p>Orbital Period : {data.orbital_period}</p>
                <p>
                  Rotation Period :{" "}
                  {data.rotation_period
                    ? data.rotation_period
                    : "Not available"}
                </p>
                <p>
                  Surface Water :{" "}
                  {data.surface_water ? data.surface_water : "Not available"}
                </p>
                <p>
                  Terrain : {data.terrain ? data.terrain : "Not available"}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {error && <ErrorComponent />}
    </Fragment>
  );
};

export default PlanetDetailPage;
