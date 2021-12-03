import React, { Fragment } from "react";
import errorImage from "./500error.png";

const ErrorComponent = () => {
  return (
    <Fragment>
      <div className="error">
        <img src={errorImage} alt="loading..." />
      </div>
    </Fragment>
  );
};

export default ErrorComponent;
