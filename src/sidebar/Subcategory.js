import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import * as Styles from './Subcategory.module.css'
import {implementationContext} from './Sidebar'

const Subcategory = ({baseRoute,isExpanded, children}) => {

    const { iconStyle } = useContext(implementationContext);

    const render = children.map(child =>{
        if(typeof(child) === "string"){
            return (
                <NavLink 
                    key={child} 
                    activeStyle={{color : iconStyle.color}} 
                    to={`${baseRoute}/${child.toLowerCase()}`}
                    className={Styles.subcategory}
                >
                    {child}
                </NavLink>
            )
        }else if(typeof(child)==="object"){
            return false 
            // for (const key in child){
            //     return false
            // }
        }
    })
        
    return (
        <ul  className={`${Styles.container} ${isExpanded? Styles.containerExpanded: ''}`}>
            {render}
        </ul>
    )
}

export default Subcategory
