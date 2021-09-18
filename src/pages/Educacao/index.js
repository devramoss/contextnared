import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import getEducationalContexts from '../../services/dato-cms/educational-contexts';
import '../../assets/styles/context-page.css';

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
                        <article key = {currentItem.id} className = "social__context">
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
        </div>
    )
}

export default EducacaoPage;