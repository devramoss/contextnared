import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import Footer from '../../components/Footer/';
import getCultureContexts from "../../services/dato-cms/culture-contexts";

function CulturaPage(){
    const [cultureContext, setCultureContext] = useState([]);
    useEffect(() => {
        getCultureContexts()
        .then((completeResponse) => {
            const contextos = completeResponse.data.allContextos
            setCultureContext(contextos)
        })
    }, [])

    return(
        <div>
            <Header/>
            <main>
                {
                    cultureContext.map((currentItem) => {
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

export default CulturaPage