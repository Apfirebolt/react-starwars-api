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

  const { isLoading, error, data } = useQuery(["singlePerson"], () =>
    getPeopleData()
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
                <p>Born in the year : {data.birth_year}</p>
                <p>Eye Color : {data.eye_color}</p>
                <p>Hair Color : {data.hair_color}</p>
                <p>Skin Color : {data.skin_color}</p>
                <p>Height (In CMS) : {data.height ? data.height : 'Not available'}</p>
                <p>Weight (in LBS) : {data.weight ? data.weight : 'Not available'}</p>
                <p>Mass : {data.mass} </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {error && <ErrorComponent />}
    </Fragment>
  );
};

export default PeopleDetailPage;
