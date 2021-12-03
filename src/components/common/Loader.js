import React, { Fragment } from "react";
import loader from "./loading.gif";

const LoaderComponent = () => {
  return (
    <Fragment>
      <div className="loader">
        <img src={loader} alt="loading..." />
      </div>
    </Fragment>
  );
};

export default LoaderComponent;
