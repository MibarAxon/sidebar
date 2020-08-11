import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

import UserDetail from "./UserDetail";
import Logo from "./Logo";
import Aplications from "./Aplications";

function SwitchAplication() {
  return (
    <div>
      <Menu
        width={330}
        customBurgerIcon={
          <img src="https://accounts.freshworks.com/omnibar/assets/apps.svg" />
        }
      >
        <Logo />
        <UserDetail nombre="Carlos Saul" email="menemlohizo_2001@gmail.com" />
        <Aplications />
      </Menu>

      <style jsx>
        {`
          .bm-burger-button {
            position: absolute;
            width: 24px;
            height: 24px;
            bottom: 10px;
            left: 24px;
            z-index: 215000;
          }

          .bm-cross-button {
            height: 24px;
            width: 24px;
          }

          /* Color/shape of close button cross */
          .bm-cross {
            background: #c6e6ff;
          }

          .bm-menu-wrap {
            top: 0px;
            position: fixed;
            height: 100%;
          }

          /* General sidebar styles */
          .bm-menu {
            background: #2a4961;
            padding: 1.5em 0.5em 0;
            font-size: 1.15em;
          }

          /* Morph shape necessary with bubble or elastic */
          .bm-morph-shape {
            fill: #373a47;
          }

          /* Individual item */
          .bm-item {
            display: inline-block;
          }

          /* Styling of overlay */
          .bm-overlay {
            top: 0px;
            position: fixed;
            background: rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </div>
  );
}

export default SwitchAplication;
