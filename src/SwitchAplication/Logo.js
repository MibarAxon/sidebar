import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
function Logo() {
  return (
    <>
      <div className="p-3 mb-4 mx-auto text-center">
        <img
          src="https://axon-campus.s3.us-east-2.amazonaws.com/otros/axon_logo_blanco.png"
          alt=""
          className="img-fluid logo-switch "
        />
      </div>

      <style jsx>
        {`
          .logo-switch {
            width: 70%;
          }
        `}
      </style>
    </>
  );
}

export default Logo;
