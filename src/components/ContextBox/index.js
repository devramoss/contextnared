import React,{useState, useEffect} from 'react';

function ContextBox(){
    const API_URL = 'https://graphql.datocms.com/';
    const API_TOKEN = '610cc2ac61382dd6da80be37f8257a';
    const [context, setContext] = useState([]);
    useEffect(()=>{
        fetch(API_URL, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${API_TOKEN}`,
                },
                body: JSON.stringify({
                    query : `{
                        allContextos {
                        id
                        autor
                        texto
                        }
                    
                    }`
                }),
            })
            .then((response) => {return response.json()})
            .then((completeResponse)=>{
                const posts = completeResponse.data.allContextos
                setContext(posts);
            })
    }, [])
    return(
          <div>
              {
                  context.map((currentItem) => {
                      return (
                          <p key = {currentItem.id}>
                              {currentItem.autor}
                          </p>
                      )
                  })
              }
          </div>
    )
}
export default ContextBox;