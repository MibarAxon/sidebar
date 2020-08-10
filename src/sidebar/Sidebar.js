import React, { useState, createContext } from "react"
import {withRouter} from 'react-router-dom'
import NavigationMenu from './NavigationMenu'
import * as Styles from './Sidebar.module.css'

export const expansionContext = createContext();
export const implementationContext = createContext();

const Sidebar = ({section,  baseRoute, iconStyle, preSelectedCategory, categories}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <expansionContext.Provider value={{ isExpanded, setIsExpanded }}>
            <implementationContext.Provider value={{baseRoute, iconStyle, preSelectedCategory, categories }}>
            {/*<-------------------------------------- COMPONENT --------------------------------------> */}
                <aside className={`${Styles.container} ${isExpanded? Styles.containerExpanded:''}`}>
                    <div className={Styles.header}>
                        <h2 className={`${Styles.header__tittle } ${isExpanded? Styles.header__tittleExpanded:''}`}>
                            {section}
                        </h2>
                        <div
                            className={`${Styles.hamburgerMenu} ${isExpanded ? Styles.hamburgerMenuExpanded :''}`}
                            onClick={() => setIsExpanded(prevState => !prevState)}
                        >
                            <span className={`${Styles.stick} ${isExpanded ?  Styles.stickExpanded: ''}`}></span>
                        </div>
                    </div>
                    <NavigationMenu categories={categories} />
                </aside>
            {/*<-------------------------------------- COMPONENT --------------------------------------> */}
            </implementationContext.Provider>
        </expansionContext.Provider>
    )
}

export default withRouter(Sidebar)

