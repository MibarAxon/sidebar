import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import * as Styles from './Subcategory.module.css'
import {implementationContext} from './Sidebar'

const Subcategory = ({baseRoute,isExpanded, children}) => {

    const { iconStyle } = useContext(implementationContext);
        
    return (
        <ul  className={`${Styles.container} ${isExpanded? Styles.containerExpanded: ''}`}>
            {children.map(child =>(  
                <NavLink 
                    key={child} 
                    activeStyle={{color : iconStyle.color}} 
                    to={`${baseRoute}/${child.toLowerCase()}`}
                    className={Styles.subcategory}
                >
                    {child}
                </NavLink>
            ))}
        </ul>
    )
}

export default Subcategory
