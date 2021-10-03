import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import getHealthContexts from '../../services/dato-cms/health-contexts';

function SaudePage(){
    const [healthContexts, setHealthContexts] = useState([])
    useEffect(()=>{
        getHealthContexts()
        .then((completeResponse)=>{
            const contextos = completeResponse.data.allContextos
            setHealthContexts(contextos)
        })
    }, [])

    return(
        <div>
            <Header/>
            <main className="general_container">
                {
                    healthContexts.map((currentItem)=>{
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

export default SaudePage