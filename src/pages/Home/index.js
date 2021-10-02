import React, {useState, useEffect} from 'react';
import getRecentPosts from '../../services/dato-cms/last-contexts'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../Home/style.css';
import wave_icon from '../../assets/images/wave-icon.jpg';
import circle_icon from '../../assets/images/circle-icon.png';
import ball_icon from '../../assets/images/ball.png';

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
            <section className="content_container">
                <p id="call__text">Aqui você encontra contextos coringa para usar na redação.</p>
                <div id="image__collection">
                     <img src={circle_icon} id="circle"/>
                     <img src={wave_icon} id="wave"/>
                     <img src={ball_icon} id="ball"/>
                </div>
            </section>
            <section>
                <span id="new__contexts">Adicionados recentemente</span>
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
            <Footer/>
        </div>
    );
}


export default HomePage;
