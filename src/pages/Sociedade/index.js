import React, {useState, useEffect} from 'react';
import getSocialContexts from '../../services/dato-cms/social-contexts';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
export default SociedadePage