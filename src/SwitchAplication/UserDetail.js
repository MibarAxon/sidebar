import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
function UserDetail(props) {
  return (
    <>
      <div className=" d-flex profile-container p-1 bg-white rounded">
        <div className="col-5">
          <img
            className="img-profile my-auto mx-auto"
            src="https://img.autocosmos.com/noticias/fotosprinc/NAZ_86a6e5567e944d94bfde63d2e19ebe7a.jpg"
          />
        </div>
        <div className="col-7 mx-auto my-auto text-left">
          <p className="m-0  name ">{props.nombre}</p>
          <p className="m-0  text-muted text-truncate email ">{props.email}</p>
          <div className=" d-flex email ">
            <a className="mr-1" href="https://campus.axontraining.com/perfil">
              Mi Perfil
            </a>

            <a href="#">Cerrar Sesion</a>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .img-profile {
            width: 100%;
            height: 100%;
            border-radius: 100%;
          }

          .profile-container {
            height: 15%;
          }
          .name {
            font-size: 15px;
          }
          .email {
            font-size: 10px;
          }
        `}
      </style>
    </>
  );
}

export default UserDetail;
