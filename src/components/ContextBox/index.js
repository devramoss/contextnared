import React,{useState, useEffect} from 'react';
import getAllContexts from '../../services/dato-cms';
function ContextBox(){
    const [context, setContext] = useState([]);
    useEffect(()=>{
        
            getAllContexts()
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