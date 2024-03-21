import React from "react";
import "./NotFoundPage.css";
import NotFoundImage from "../assets/four_oh_four.webp";

export const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <img
        src={NotFoundImage}
        alt="Not Found Image"
        className="not-found-image"
      />
      <p className="not-found-text">
        We're sorry, the page you are looking for could not be found.
      </p>
      <p className="not-found-text">
        It might have been removed, had its name changed, or is temporarily
        unavailable.
      </p>
      <p className="not-found-text">
        Please visit our{" "}
        <a href="https://ironsteam.netlify.app/" className="not-found-link">
          homepage
        </a>{" "}
        to continue browsing Ironsteam.
      </p>
    </div>
  );
};
