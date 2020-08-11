import React, {useContext, useState} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {MdKeyboardArrowDown} from 'react-icons/md'
import * as Styles from './Category.module.css' 
import {expansionContext, implementationContext} from './Sidebar'

const Category = ({label,Icon,children}) => {
    
    const [ isExpanded, setIsExpanded] = useState(false);
    const { isSidebarExpanded, setIsSidebarExpanded } = useContext(expansionContext);
    const { baseRoute } = useContext(implementationContext);
    const clickHandler = () => {
        if(!!children) {
            setIsExpanded(prevState => !prevState)
            setIsSidebarExpanded(prevState => (prevState)? prevState: !prevState)
        }
    }

    return (
            <NavLink 
                to={`${baseRoute}/${label.toLowerCase()}`}
                className={`${Styles.container} ${isSidebarExpanded? Styles.containerExpanded:''}`}
                activeStyle={{borderLeft: '3px solid white', backgroundColor: "rgba(0, 0, 0, .7)"}}
                onClick={clickHandler}
            >
                {Icon}
                <p className={`${Styles.label} ${isSidebarExpanded? Styles.labelExpanded:''}`}>{label}</p>
                {!!isSidebarExpanded && !!children && <MdKeyboardArrowDown className={`${Styles.arrow} ${isExpanded? Styles.arrowExpanded:''}`}/>}
                {/* {aca verificamos si el sidebar esta expandido y si tiene hijos a renderizar para mostrar la flecha o no} */}
            </NavLink>
    )
}

export default withRouter(Category)
