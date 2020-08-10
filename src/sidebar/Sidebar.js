import React, { useState, createContext } from "react"
import {withRouter} from 'react-router-dom'
import NavigationMenu from './NavigationMenu'
import * as Styles from './Sidebar.module.css'

export const expansionContext = createContext();
export const implementationContext = createContext();

const Sidebar = ({section,  baseRoute, iconStyle, preSelectedCategory, categories}) => {
    const [isExpanded, setIsExpanded] = useState(true);
    return (
        <expansionContext.Provider value={{ isExpanded, setIsExpanded }}>
            <implementationContext.Provider value={{baseRoute, iconStyle, preSelectedCategory, categories }}>
                <aside className={Styles.container}>
                    <div className={Styles.header}>
                        <h2>{section}</h2>
                        <div
                            className={`${Styles.hamburgerMenu} ${isExpanded ? Styles.hamburgerMenuExpanded: ''}`}
                            onClick={() => setIsExpanded(prev => !prev)}
                        >
                            <span className={`${Styles.stick} ${isExpanded ?  Styles.stickExpanded: ''}`}></span>
                        </div>
                    </div>
                    <NavigationMenu categories /> 
                </aside>
            </implementationContext.Provider>
        </expansionContext.Provider>
    )
}

export default withRouter(Sidebar)

