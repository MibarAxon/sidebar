import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import {
  FaCalculator,
  FaGraduationCap,
  FaUserGraduate,
  FaIndustry,
  FaUniversity,
} from "react-icons/fa";
function Aplications() {
  return (
    <>
      <div className="  d-flex bg-white rounded mt-5 aplitacion-container flex-wrap  p-3">
        <div className="col-12 mb-3 text-muted">
          <h6>Otros sitios de Axon</h6>
        </div>
        <div className="col-4 mx-auto pt-3">
          <a className="link" href="http://adm.axontraining.com/">
            <FaCalculator className=" border-axon adm p-2" />
          </a>

          <p className="aplication-title text-muted text-center">
            Administracion
          </p>
        </div>
        <div className="col-4 mx-auto  text-center pt-3">
          <a className="link" href="https://profesores.axontraining.com/">
            <FaGraduationCap className=" border-axon academico p-2 " />
          </a>

          <p className="aplication-title text-muted text-center ">Academico</p>
        </div>
        <div className="col-4 mx-auto pt-3">
          <a className="link" href="http://academico.axontraining.com/">
            <FaUserGraduate className=" border-axon campus p-2" />
          </a>

          <p className="aplication-title text-muted text-center">Campus</p>
        </div>
        <div className="col-4 mx-auto pt-3">
          <a className="link" href="https://campus.axontraining.com/">
            <FaIndustry className=" border-axon intranet p-2 " />
          </a>

          <p className="aplication-title text-muted text-center">Intranet</p>
        </div>
        <div className="col-4 mx-auto pt-3">
          <a className="link" href="https://profesores.axontraining.com/">
            <FaUniversity className=" border-axon profesores p-2 " />
          </a>
          <p className="aplication-title text-muted text-center">Profesores</p>
        </div>
      </div>
      <style jsx>{`
        .border-axon {
          border-radius: 0px 15px 15px 15px;
        }
        .aplication-title {
          font-size: 10px;
          margin: 0;
          margin-top: 5px;
        }
        .link {
          text-decoration: none;
        }
        .adm {
          color: #ffffff;
          font-size: 45px;
          border: 3px solid #e63444;
          background-color: #e63444;
        }
        .academico {
          color: #ffffff;
          font-size: 45px;
          border: 3px solid #349b4c;
          background-color: #349b4c;
        }
        .campus {
          color: #ffffff;
          font-size: 45px;
          border: 3px solid #357fe5;
          background-color: #357fe5;
        }
        .intranet {
          color: #ffffff;
          font-size: 45px;
          border: 3px solid #f5871e;
          background-color: #f5871e;
        }
        .profesores {
          color: #ffffff;
          font-size: 45px;
          border: 3px solid #19806a;
          background-color: #19806a;
        }
      `}</style>
    </>
  );
}

export default Aplications;
