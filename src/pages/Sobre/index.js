import React from 'react';
import font from '../../services/fonts.css'
import Form from '../../components/Form';
import '../Sobre/style.css'
function SobreBox(){
    return(
        <div className = "boxSobre">
            <h1 className = "title">Sobre</h1>
            <p>O ContextNaRed nasceu com o intuito de ajudar outros estudantes</p>
            <p>Deseja bater um papo com a gente ? Entre em contato</p>
            <h2 className = "title">Contato</h2>
            <Form/>
      </div>
      
    )
}

export default SobreBox;