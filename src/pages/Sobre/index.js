import React from 'react';
import font from '../../services/fonts.css';
import Form from '../../components/Form';
import Header from '../../components/Header';
import '../Sobre/style.css';

function SobrePage(){
    return(
        <div className = "boxSobre">
            <Header/>
            <h1 className = "title">Sobre</h1>
            <p>O ContextNaRed nasceu com o intuito de ajudar outros estudantes</p>
            <p>Deseja bater um papo com a gente ? Entre em contato</p>
            <h2 className = "title">Contato</h2>
            <Form/>
      </div>
      
    )
}

export default SobrePage;