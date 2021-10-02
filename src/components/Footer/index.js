import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import linkedIn from '../../assets/images/linkedin.svg';
import github from '../../assets/images/github.svg';
import logo from '../../assets/images/logo.png';

const footerPortalRoot = document.getElementById('footer-portal-root');

const scrollTop = () =>{
    window.scrollTo(0, 0);
}

function Footer(){
    return ReactDOM.createPortal(
        <footer>
            <div className="container">
                <section id="publicity">
                    <img src={logo} alt="Logo" id="footer__logo"/>
                    <p>Fortalecendo argumentos</p>
                </section>
                <p id="copyright">Copyright © 2021 | ContextNaRed</p>
            </div>
            <section id="developer__informations">
                <p>Desenvolvido por Emilly Ramos</p>
                <div id="social__media">
                    <a href="https://www.linkedin.com/in/emilly-ramos-517b14208/" target="_blank">
                        <img src={linkedIn} alt="Logo do LinkedIn"/>
                    </a>
                    <a href="https://github.com/devramoss" target="_blank">
                        <img src={github} alt="Logo do Github"/>
                    </a>
                </div>
            </section>
            <button type="button" id="go_top" onClick={scrollTop}>
                 <img src="https://img.icons8.com/ios-filled/50/ffffff/collapse-arrow.png"/>
            </button>
        </footer>,
        footerPortalRoot
    );
}

export default Footer;