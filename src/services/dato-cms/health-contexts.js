const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = '610cc2ac61382dd6da80be37f8257a';

const getHealthContexts = () =>{
    return fetch(API_URL, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${API_TOKEN}`
            },
            body : JSON.stringify({
                query : `{
                    allContextos(filter: {tag: {eq: "Saúde"}}){
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

export default getHealthContexts