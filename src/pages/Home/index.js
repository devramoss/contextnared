import React, {useState, useEffect} from 'react';
import getRecentPosts from '../../services/dato-cms/last-contexts'
import Header from '../../components/Header';
import '../Home/style.css'

function HomePage(){
    const [recentContexts, setRecentContexts] = useState([])
    useEffect(()=>{
        getRecentPosts()
        .then((completeResponse)=>{
            const contextos = completeResponse.data.allContextos
            setRecentContexts(contextos)
        })
    }, [])

    return(
        <div>
            <Header/>
            <section>
                {
                    recentContexts.map((currentItem)=>{
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
            </section>
        </div>
    );
}


export default HomePage;
