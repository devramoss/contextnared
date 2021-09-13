import Header from '../Header';
import '../Form/style.css'
function Form(){
    
    return( 
        <div>         
            <form className = "">
                <label>Nome</label>
                <input type = "text"/>
                <label>E-mail</label>
                <input type = "email"/>
                <label>Assunto</label>
                <textarea></textarea>
                <button type = "submit">Enviar</button>
            </form>
        </div>
        
    ) 
}

export default Form;