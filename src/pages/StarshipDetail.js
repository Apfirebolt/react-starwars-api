import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from "../components/common/Loader";
import ErrorComponent from "../components/common/Error";

const ShipDetailPage = () => {
  const params = useParams();
  const getShipData = async () => {
    const shipData = await axiosInstance.get(`starships/${params.id}`);
    return shipData.data;
  };

  const { isLoading, error, data } = useQuery(["singleShip"], () =>
    getShipData()
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
                <p>MGLT : {data.MGLT}</p>
                <p>Cargo Capacity : {data.cargo_capacity}</p>
                <p>Consumables : {data.consumables}</p>
                <p>Cost in Credits : {data.cost_in_credits}</p>
                <p>Length : {data.length}</p>
                <p>Manufacturer : {data.manufacturer}</p>
                <p>Starship Class : {data.starship_class}</p>
                <p>No of Passengers : {data.passengers}</p>
                <p>Model : {data.model}</p>
                <p>Crew : {data.crew ? data.crew : "Not available"}</p>
                <p>
                  Hyperdrive Rating :{" "}
                  {data.hyperdrive_rating
                    ? data.hyperdrive_rating
                    : "Not available"}
                </p>
                <p>
                  Max Atmosphere Speed :{" "}
                  {data.max_atmosphering_speed
                    ? data.max_atmosphering_speed
                    : "Not available"}{" "}
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

export default ShipDetailPage;
