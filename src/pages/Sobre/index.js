import React from 'react';
import Form from './Component/Form';
import Header from '../../components/Header';
import '../Sobre/style.css';

function SobrePage(){
    return(
        <div className = "boxSobre">
            <Header/>
            <main class = "about__us">
                <h1 className = "title">Sobre</h1>
                <p id = "about__us__text">
                    O ContextNaRed foi criado com o intuito de ajudar os estudantes a fortalecerem seus argumentos durante o desenvolvimento de redações, principalmente as que pertencem ao modelo ENEM, por intermédio da disponibilização de contextos pequenos e poderosos de fácil memorização. Deseja bater um papo? Entre em contato conosco pelo formulário abaixo.
                </p>
                <h2 className = "title">Contato</h2>
                <Form/>
            </main>
      </div>
      
    )
}

export default SobrePage;