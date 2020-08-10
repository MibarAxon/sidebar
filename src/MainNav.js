// import React, { useContext }  from 'react';
// import { NavLink, withRouter } from 'react-router-dom';
// import { MdAssessment } from 'react-icons/md'
// import { IconContext } from 'react-icons' 
// import { IoIosPaper } from "react-icons/io"
// import { BsPersonCheckFill } from "react-icons/bs"
// import { expansionContext } from './Sidebar'
// import Styles from './MainNav.module.css' 

// const MainNav = (props) => {
//     const { isExpanded, setIsExpanded } = useContext(expansionContext)
//     return (
//         <nav className={Styles.container}>
//             <div
//                 className={`${Styles.hamburgerMenu} ${isExpanded ? Styles.hamburgerMenuExpanded: ''}`}
//                 onClick={() => setIsExpanded(prev => !prev)}
//             >
//                 <span className={`${Styles.stick} ${isExpanded ?  Styles.stickExpanded: ''}`}></span>
//             </div>
//             <div className={Styles.linkContainer}>
//                 <NavLink
//                     activeStyle={{ borderBottom: "solid white 2px" }}
//                     className={`${Styles.mainNavLink} ${!isExpanded ? Styles.mainNavLinkExpanded : ''}`}
//                     to="/web/requests"
//                 >
//                     <IoIosPaper className={Styles.icon} />
//                     <span>Requests</span>
//                 </NavLink>
//                 <NavLink
//                     activeStyle={{ borderBottom: "solid white 2px" }}
//                     className={`${Styles.mainNavLink} ${!isExpanded ? Styles.mainNavLinkExpanded : ''}`}
//                     to="/web/tasks"
//                 >
//                     <BsPersonCheckFill className={Styles.icon}/>
//                     <span>Tasks</span>
//                 </NavLink>
//             </div>
//         </nav>
//     )
// }

// export default withRouter(MainNav)