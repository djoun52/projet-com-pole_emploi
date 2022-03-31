import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import BtnLogout from '../../BtnLogout/BtnLogout';
import { SidebarData } from "./SidebarData"
import { IconContext } from 'react-icons';
import * as GrIcons from "react-icons/gr";


export default function Navbar() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    let result ;

    const { email } = useSelector(state => ({
        ...state.userReducer,
    }))


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        {!email && (
                            <>
                                <li className="nav-text">
                                    <Link to='/login'><AiIcons.AiOutlineLogin />Login</Link>
                                </li>
                                <li className="nav-text">
                                    <Link to='/register'><AiIcons.AiFillEdit />Register</Link>
                                </li>
                            </>
                        )}
                        {email.length !== 0 && (
                            <li className="nav-text">
                                <BtnLogout />
                            </li>
                        )}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}
