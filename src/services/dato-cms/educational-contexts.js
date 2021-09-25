const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = '610cc2ac61382dd6da80be37f8257a';

const getEducationalContexts = () => {
    return fetch(API_URL, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${API_TOKEN}`
                },
                body : JSON.stringify({
                    query : `{
                        allContextos(filter: {tag: {eq: "Educação"}}){
                            id
                            autor
                            texto
                        }
                    }`
                 })   
            })
            .then((response) => {
                return response.json()
            })
}

export default getEducationalContexts