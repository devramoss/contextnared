import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header/style.css';
import logo from '../../assets/images/logo.png';
import menu__mobile from '../../assets/images/menu-mobile.svg'
import home__icon from '../../assets/images/home-icon.svg';

function Header(){
   const [sidebar, setSidebar] = useState(false)
   const [submenu, setSubMenu] = useState(false)

   const showSideBar = () => {
       setSidebar(!sidebar)
   }

   const showSubMenu = () => {
        setSubMenu(!submenu)
   }
   
   return(
        <header>
            <nav>
                <Link to = "#" onClick = {showSideBar}>
                    <img src = {menu__mobile} id = "menu__mobile" alt = "Ícone de menu mobile"/>
                </Link>
                
                <ul
                className="menu-dropdown" 
                id={sidebar ? 'menu_mobile_active': 'menu_mobile'}
                >
                    <li>
                        <img src = {logo} alt = "Logo do site" id = "logo"/>
                    </li>
                    <li>
                        <Link to="/" className="menu-dropdown_link">
                            <img src ={home__icon} className="home-icon"/>
                        </Link>
                    </li>
                    <li className="menu-dropdown_item">
                        <span id="sub-menu_titulo">
                            <Link to="#" onClick={showSubMenu}id="sub-menu_link">
                                Contextos
                            </Link>
                        </span>
                        <ul 
                        className="sub_menu" 
                        id={submenu?'sub_menu_active': 'sub_menu'}
                        >
                            <li className = "menu-dropdown_item">
                                <Link to = "/cultura" className = "menu-dropdown_link">
                                    Cultura
                                </Link>
                            </li>
                            <li className = "menu-dropdown_item">
                                <Link to = "/educacao" className = "menu-dropdown_link">
                                    Educação
                                </Link>
                            </li>
                            <li className = "menu-dropdown_item">
                                <Link to = "/geral" className = "menu-dropdown_link">
                                    Geral
                                </Link>
                            </li>
                            <li className = "menu-dropdown_item">
                                <Link to = "/saude" className = "menu-dropdown_link">
                                    Saúde
                                </Link>
                            </li>
                            <li className = "menu-dropdown_item">
                                <Link to = "/sociedade" className = "menu-dropdown_link">
                                    Sociedade
                                </Link>
                            </li>
                            <li className = "menu-dropdown_item">
                                <Link to = "/tecnologia" className = "menu-dropdown_link">
                                    Tecnologia
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className = "menu-dropdown_item">
                        <Link to = "/sobre" className = "menu-dropdown_link">
                            Sobre
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
   )
}

export default Header;