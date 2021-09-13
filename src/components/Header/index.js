import React from 'react';
import '../Header/style.css';

function Header(){
   return(
    <header>
            <nav>
                <ul className="menu-dropdown">
                    <li className = "menu-dropdown_item"><a href = "#" className = "menu-dropdown_link">Home</a></li>
                    <li className = "menu-dropdown_item">
                        <span id = "sub-menu_titulo">Contextos</span>
                        <ul className = "sub_menu">
                            <li className = "menu-dropdown_item"><a href = "#" className = "menu-dropdown_link">Cultura</a></li>
                            <li className = "menu-dropdown_item"><a href = "#" className = "menu-dropdown_link">Educação</a></li>
                            <li className = "menu-dropdown_item"><a href = "#" className = "menu-dropdown_link">Saúde</a></li>
                            <li className = "menu-dropdown_item"><a href = "#" className = "menu-dropdown_link">Tecnologia</a></li>
                        </ul>
                    </li>
                    <li className = "menu-dropdown_item"><a href = "#" className = "menu-dropdown_link">Sobre</a></li>
                </ul>
            </nav>
        </header>
   )
}

export default Header;