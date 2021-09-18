import React, {useState, useEffect} from 'react';
import getSocialContexts from '../../services/dato-cms/social-contexts';
import Header from '../../components/Header';
import '../../assets/styles/context-page.css';

function SociedadePage(){
    const [socialContexts, setSocialContexts] = useState([]);
    useEffect(() => {
        getSocialContexts()
        .then((completeResponse) => {
            const contextos = completeResponse.data.allContextos
            setSocialContexts(contextos)
        })
    }, [])

    return(
        <div>
            <Header/>
            <main>
                {
                    socialContexts.map((currentItem) => {
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
export default SociedadePage