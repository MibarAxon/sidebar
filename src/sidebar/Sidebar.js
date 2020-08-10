import React, { useState, createContext } from "react"
import Category from './Category'
import * as Styles from './Sidebar.module.css'
// import SubNav from './SubNav'
// import MainNav from './MainNav.js'


export const expansionContext = createContext();

const Sidebar = ({baseRoute, section, iconStyle, preSelectedCategory, categories}) => {
    const [isExpanded, setIsExpanded] = useState(true);
    return (
        <expansionContext.Provider value={{ isExpanded, setIsExpanded }}>
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
                {categories.map(category => {
                    return (<ul>
                        <Category {...category}/>
                    </ul>)
                })}
            </aside>
        </expansionContext.Provider>
    )
}
export default Sidebar

