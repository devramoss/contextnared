import React, {useState, useEffect} from "react";
import getGeneralContexts from "../../services/dato-cms/general-contexts";
import Header from '../../components/Header';

function GeralPage(){
    const [generalContexts, setGeneralContexts] = useState([]);
    useEffect(()=>{
        getGeneralContexts()
        .then((completeResponse)=>{
            const contextos = completeResponse.data.allContextos
            setGeneralContexts(contextos)
        })
    }, [])

    return(
        <div>
            <Header/>
            <main>
                {
                    generalContexts.map((currentItem)=>{
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
        </div>
    )
}

export default GeralPage