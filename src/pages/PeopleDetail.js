import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosInstance from "../plugins/interceptor";
import LoaderComponent from "../components/common/Loader";
import ErrorComponent from "../components/common/Error";

const PeopleDetailPage = () => {
  const params = useParams();
  const getPeopleData = async () => {
    const peopleData = await axiosInstance.get(`people/${params.id}`);
    return peopleData.data;
  };

  const { isLoading, error, data } = useQuery(
    ["singlePerson"],
    () => getPeopleData()
  );
  console.log("Data is ", data);
  return (
    <Fragment>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div>
          <h4 className="text-center text-primary my-3">PEOPLE DETAIL PAGE</h4>
        </div>
      )}
      {error && <ErrorComponent />}
    </Fragment>
  );
};

export default PeopleDetailPage;
