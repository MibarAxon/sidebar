import React, { useContext } from 'react'
import Category from './Category'
import {IconContext} from 'react-icons'
import * as Styles from './NavigationMenu.module.css'
import {implementationContext} from './Sidebar'

const NavigationMenu = ({categories}) => {
    const {iconStyle} = useContext(implementationContext)
    return (
        <IconContext.Provider value={iconStyle}>
            <ul className= {Styles.container}>
                {categories.map(category => <Category {...category}/>)}
            </ul>
        </IconContext.Provider>
    )
}

export default NavigationMenu



