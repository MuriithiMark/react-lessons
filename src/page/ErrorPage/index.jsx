import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import "./error-page.css";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.log(error)

  const handleGoToHome = () => {
    navigate("/")
  }

  return (
    <div className="error-page">
      <span>Oops!</span>
      <span>An Error was encountered</span>
      <span>
        {/* <em>{error.statusText || error.message}</em> */}
      </span>
      <button onClick={handleGoToHome}>Go to Home</button>
    </div>
  );
};

export default ErrorPage;
