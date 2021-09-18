import React from 'react';
import './style.css';
import page__not__found__image from '../../assets/images/page_not_found.svg';

function Page_404() {
    return(
        <main>
            <img className = "page_not_found_image" src = {page__not__found__image} alt = "Página não encontrada"/> 
        </main>
    )
}

export default Page_404;