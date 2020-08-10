import React, {useContext} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {MdKeyboardArrowDown} from 'react-icons/md'
import * as Styles from './Category.module.css' 
import {expansionContext} from './Sidebar'

const Category = ({label,Icon,children}) => {
    const { isExpanded, setIsExpanded } = useContext(expansionContext)
    return (
        <NavLink key={label} className={Styles.container}>
            {Icon}
            {label}
            {<MdKeyboardArrowDown className={Styles.arrow}/>}
        </NavLink>
    )
}

export default withRouter(Category)
