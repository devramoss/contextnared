import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/style.css';

function Header(){
   return(
    <header>
            <nav>
                <ul className="menu-dropdown">
                    <li className = "menu-dropdown_item">
                        <Link to = "/" className = "menu-dropdown_link">
                            Home
                        </Link>
                    </li>
                    <li className = "menu-dropdown_item">
                        <span id = "sub-menu_titulo">Contextos</span>
                        <ul className = "sub_menu">
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
                                <Link to = "#" className = "menu-dropdown_link">
                                    Geral
                                </Link>
                            </li>
                            <li className = "menu-dropdown_item">
                                <Link to = "#" className = "menu-dropdown_link">
                                    Saúde
                                </Link>
                            </li>
                            <li className = "menu-dropdown_item">
                                <Link to = "/sociedade" className = "menu-dropdown_link">
                                    Sociedade
                                </Link>
                            </li>
                            <li className = "menu-dropdown_item">
                                <Link to = "#" className = "menu-dropdown_link">
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