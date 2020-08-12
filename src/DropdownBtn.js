import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropdownBtn = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle className="d-flex justify-content-between align-center boton">
              <img
                 src="https://miro.medium.com/max/700/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                  alt="..."
                  className="mr-2"
                  style={{ maxHeight: "35px", borderRadius: "50%", backgroundColor: "rgb(34, 34, 34)" }}
              />
              <p className="mt-1">Lautaro Avila</p>              
          </DropdownToggle>
      <DropdownMenu right="false">
        <DropdownItem>Mi perfil</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Cerrar sesión</DropdownItem>
      </DropdownMenu>

      <style jsx>
          {
          `
           .boton{
             background-color: black !important;
             border: 0px;
             transition: all 300ms !important;
           }
           .boton:hover{
             background-color: #E4E4E4 !important;
             color: black;
           } 
           .dropdown-menu{
             width: 100% !important;
           }
          `
        }
        </style>
    </Dropdown>
  );
}

export default DropdownBtn;