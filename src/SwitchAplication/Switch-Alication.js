import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

import UserDetail from "./UserDetail";
import Logo from "./Logo";
import Aplications from "./Aplications";

function SwitchAplication() {
  return (
    <div>
      <Menu
        right
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
          /* Position and sizing of burger button */
          .bm-burger-button {
            position: fixed;
            width: 36px;
            height: 30px;
            top: 10px;
            right: 20px;
          }

          /* Color/shape of burger icon bars */
          .bm-burger-bars {
            background: #373a47;
          }

          /* Color/shape of burger icon bars on hover*/
          .bm-burger-bars-hover {
            background: #a90000;
          }

          /* Position and sizing of clickable cross button */
          .bm-cross-button {
            height: 24px;
            width: 24px;
          }

          /* Color/shape of close button cross */
          .bm-cross {
            background: #c6e6ff;
          }

          /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
          .bm-menu-wrap {
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
            background: rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </div>
  );
}

export default SwitchAplication;
