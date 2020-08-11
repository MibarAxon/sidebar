import React, { useState, createContext } from "react";
import { withRouter, Switch } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import * as Styles from "./Sidebar.module.css";
import SwitchAplication from "../SwitchAplication/Switch-Alication";

//1) Creamos el contexto
export const expansionContext = createContext();
export const implementationContext = createContext();

const Sidebar = ({
  section,
  baseRoute,
  iconStyle,
  preSelectedCategory,
  categories,
}) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  return (
    // 2) Proveemos la informacion del contexto
    <expansionContext.Provider
      value={{ isSidebarExpanded, setIsSidebarExpanded }}
    >
      <implementationContext.Provider
        value={{ baseRoute, iconStyle, preSelectedCategory, categories }}
      >
        {/*<-------------------------------------- COMPONENT --------------------------------------> */}
        <aside
          className={`${Styles.container} ${
            isSidebarExpanded ? Styles.containerExpanded : ""
          }`}
        >
          <div className={Styles.header}>
            <h2
              className={`${Styles.header__tittle} ${
                isSidebarExpanded ? Styles.header__tittleExpanded : ""
              }`}
            >
              {section}
            </h2>
            <div
              className={`${Styles.hamburgerMenu} ${
                isSidebarExpanded ? Styles.hamburgerMenuExpanded : ""
              }`}
              onClick={() => setIsSidebarExpanded((prevState) => !prevState)}
            >
              <span
                className={`${Styles.stick} ${
                  isSidebarExpanded ? Styles.stickExpanded : ""
                }`}
              ></span>
            </div>
          </div>

          <NavigationMenu categories={categories} />

          <SwitchAplication
            className={`${Styles.appButton} ${
              isSidebarExpanded ? Styles.appButtonExpanded : ""
            }`}
          />
          {isSidebarExpanded && (
            <p className={Styles.applicationsLabel}>Applications</p>
          )}
        </aside>
        {/*<-------------------------------------- COMPONENT --------------------------------------> */}
      </implementationContext.Provider>
    </expansionContext.Provider>
  );
};

export default withRouter(Sidebar);
