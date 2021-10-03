import React, { useState } from 'react';
import { useFormik } from 'formik';
import './style.css';
import send_email_image from '../../../../assets/images/send-email.jpg'
import Modal from '../../../../components/Modal/Modal';
import Footer from '../../../../components/Footer';

function Form(){
    const [showModal, setShowModal] = useState(null)

    const openModal = () =>{
        setShowModal(true)
    }

    const validate = (values) =>{
        const errors = {};

        if(!values.name){
            errors.name = "Esse campo é necessário" ;
        } else if(values.name.length > 30){
            errors.name = "Deve possuir 30 caracteres ou menos" ;
        }

        if(!values.email){
            errors.email = "Esse campo é necessário" ;
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = "Endereço de e-mail inválido" ;
        }

        if(!values.subject){
            errors.subject = "Esse campo é necessário";
        }
        
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '' 
        },
        validate,
        onSubmit: (values) => {
            fetch(`${process.env.REACT_APP_API_URL}enviarformulario`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    nome: values.name,
                    email: values.email,
                    assunto: values.subject
                })
            })
            .then(openModal())
        }
    });

    return(          
           <div>
                <form className="contact__form" onSubmit={formik.handleSubmit}> 
                <Modal 
                    isOpen={Boolean(showModal)} 
                    onClickClose={()=>{setShowModal(null)}}
                >
                    <h1 id="modal-title">Agradecemos por entrar em contato.</h1>
                    <img src={send_email_image} alt="E-mail enviado" id="send-email"/>
                </Modal>
                <label htmlFor = "name">
                    Nome
                </label>

                <input 
                    type = "text" 
                    className = "form__inputs" 
                    name = "name" 
                    onChange = {formik.handleChange}
                    onBlur = {formik.handleBlur}
                    value = {formik.values.name}
                />

                {
                formik.touched.name && formik.errors.name ? 
                (<div className = "error">{formik.errors.name}</div>) : null
                }

                <label htmlFor = "email">
                    E-mail
                </label>

                <input 
                    type = "email" 
                    className = "form__inputs"
                    name = "email"
                    onChange = {formik.handleChange}
                    onBlur = {formik.handleBlur}
                    value = {formik.values.email}
                />

                {
                    formik.touched.email && formik.errors.email ? 
                    (<div className = "error">{formik.errors.email}</div>) : null
                }   

                <label htmlFor = "subject">
                    Assunto
                </label>

                <textarea 
                    className = "text__area"
                    name = "subject"
                    onChange = {formik.handleChange}
                    onBlur = {formik.handleBlur}
                    value = {formik.values.subject}
                >

                </textarea>

                {
                    formik.touched.subject && formik.errors.subject ? 
                    (<div className = "error">{formik.errors.subject}</div>) : null
                }

                <button 
                    type = "submit" 
                    disabled = {!formik.isValid || formik.isSubmitting === true}
                    id = "button__submit"
                >
                    Enviar
                </button>
            </form>
            <Footer/>
           </div>
    ) 
}

export default Form;