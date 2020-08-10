import React from 'react'
import Category from './Category'

const NavigationMenu = ({categories}) => {
    return (<ul>{categories.map(category => <Category {...category}/>)}</ul>)
}

export default NavigationMenu



