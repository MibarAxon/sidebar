import React, {useContext} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {MdKeyboardArrowDown} from 'react-icons/md'
import * as Styles from './Category.module.css' 
import {expansionContext, implementationContext} from './Sidebar'

const Category = ({label,Icon,children}) => {
    
    const { isExpanded, setIsExpanded } = useContext(expansionContext)
    const { baseRoute } = useContext(implementationContext)

    return (
        <li 
            className={Styles.container}
            key={label}
        >
            <NavLink 
                to={`${baseRoute}/${label.toLowerCase()}`}
                className={Styles.navigationLink}
            >
                {Icon}
                {label}
                {!!children && <MdKeyboardArrowDown className={`${Styles.arrow} ${isExpanded? Styles.arrowExpanded:''}`}/>}
            </NavLink>
        </li>
    )
}

export default withRouter(Category)
