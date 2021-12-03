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

  const { isLoading, error, data } = useQuery(
    ["singleShip"],
    () => getShipData()
  );
  console.log("Data is ", data);
  return (
    <Fragment>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div>
          <h4 className="text-center text-primary my-3">Ship DETAIL PAGE</h4>
        </div>
      )}
      {error && <ErrorComponent />}
    </Fragment>
  );
};

export default ShipDetailPage;
