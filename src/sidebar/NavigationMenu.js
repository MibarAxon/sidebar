import React, { useContext } from "react";
import Category from "./Category";
import { IconContext } from "react-icons";
import * as Styles from "./NavigationMenu.module.css";
import { reactIcon, reactIconExpanded } from "./Category.module.css";
import { implementationContext, expansionContext } from "./Sidebar";

const NavigationMenu = ({ categories }) => {
  const { iconStyle } = useContext(implementationContext);
  const { isSidebarExpanded } = useContext(expansionContext);

  const standardIconStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    size: "24px",
    transform: "translate(-50%,-50%)",
  };
  const iconClassName = isSidebarExpanded ? reactIconExpanded : reactIcon;

  return (
    <IconContext.Provider
      value={{ ...standardIconStyle, ...iconStyle, className: iconClassName }}
    >
      <ul className={Styles.container}>
        {categories.map((category) => (
          <Category key={category.label} {...category} />
        ))}
      </ul>
    </IconContext.Provider>
  );
};

export default NavigationMenu;
