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
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>genre</th>
                                    <th>release date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="active">
                                    <td>The Shawshank Redemption</td>
                                    <td>Crime, Drama</td>
                                    <td>14 October 1994</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            }
            {error && <ErrorComponent />}
        </Fragment>
    );
};

export default PeoplePage;
