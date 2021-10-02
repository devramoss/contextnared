import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import getEducationalContexts from '../../services/dato-cms/educational-contexts';

function EducacaoPage(){
    const [educationalContexts, setEducationalContexts] = useState([]);
    useEffect(() => {
        getEducationalContexts()
        .then((completeResponse) => {
            const contextos = completeResponse.data.allContextos
            setEducationalContexts(contextos)
        })
    }, [])

    return(
        <div>
            <Header/>
            <main>
                {
                    educationalContexts.map((currentItem) => {
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

export default EducacaoPage;