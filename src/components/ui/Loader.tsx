import React from "react";

type LoaderProps = {
  visible?: boolean;
};

const Loader: React.FC<LoaderProps> = ({ visible = true }) => {
  return (
    <div className={`loader-overlay ${visible ? "" : "loader--hide"}`} role="status" aria-label="Loading">
      <div className="loader-slide-track">
        <div className="loader-slide-area">
          <img src="/assets/loader.svg" alt="robot arm" className="loader-arm-slide" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
