import React from 'react';
import font from '../../services/fonts.css';
import Form from './Component/Form';
import Header from '../../components/Header';
import '../Sobre/style.css';

function SobrePage(){
    return(
        <div className = "boxSobre">
            <Header/>
            <main class = "about__us">
                <h1 className = "title">Sobre</h1>
                <p>
                    O ContextNaRed nasceu com o intuito de ajudar outros estudantes.
                    Deseja bater um papo ? Entre em contato conosco pelo formulário pelo formulário abaixo.
                </p>
                <h2 className = "title">Contato</h2>
                <Form/>
            </main>
      </div>
      
    )
}

export default SobrePage;