import React, {useState, useEffect} from 'react';
import getTechnologyContexts from '../../services/dato-cms/technology-contexts';
import Header from "../../components/Header";
import Footer from '../../components/Footer/';
import '../../assets/styles/context-page.css';

function TecnologiaPage(){
    const [technologyContexts, setTechnologyContexts] = useState([]);
    useEffect(()=>{
        getTechnologyContexts()
        .then((completeResponse)=>{
            const contextos = completeResponse.data.allContextos
            setTechnologyContexts(contextos)
        })
    }, [])
    return(
        <div className="general_container">
            <Header/>
            <main>
                {
                    technologyContexts.map((currentItem)=>{
                        return(
                            <article key = {currentItem.id} className = "context">
                                <p className = "text">
                                    {currentItem.texto}
                                </p>
                                <p className = "author">
                                    {currentItem.autor}
                                </p>
                            </article>
                        )
                    })
                }
            </main>
            <Footer/>
        </div>
    )
}

export default TecnologiaPage;
