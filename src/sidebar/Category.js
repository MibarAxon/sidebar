import React from 'react'
import {NavLink} from 'react-router-dom'
import {MdKeyboardArrowDown} from 'react-icons/md'
import * as Styles from './Category.module.css' 

const Category = ({category}) => {
    return (
        <NavLink key={category.label} className={Styles.container}>
            {category.icon}
            {category.label}
            {<MdKeyboardArrowDown className={Styles.arrow}/>}
        </NavLink>
    )
}

export default Category
