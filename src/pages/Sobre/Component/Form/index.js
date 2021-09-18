import React from 'react';
import { useFormik } from 'formik';
import './style.css';

function Form(){
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
            console.log(JSON.stringify(values, null, 2));
        }
    });

    return(          
            <form className = "contact__form" onSubmit = {formik.handleSubmit}>
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

                <button type = "submit" id = "button__submit">
                    Enviar
                </button>
            </form>
    ) 
}

export default Form;