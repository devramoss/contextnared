const API_URL = 'https://graphql.datocms.com/';
const recentPostData = new Date();

const getRecentPosts = () => {
    return fetch(API_URL, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${process.env.REACT_APP_DATO_TOKEN}`
            },
            body : JSON.stringify({
                query : `{
                    allContextos(first: 7, filter: {_publishedAt: {lte: "${recentPostData}"}}){
                        id
                        texto
                        autor
                    }
                }`
            })
        })
        .then((response)=>{
            return response.json()
        })
}

export default getRecentPosts;