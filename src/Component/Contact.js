import React,{useState} from 'react'
import './contact.css'
const Contact = () => {
    const [info,setInfo] = useState({
        'name':'',
        'email':'',
        'subject':'',
        'message':'',
    })

    const handleChange = (e)=>{
        setInfo({...info,
            [`${e.target.name}Incorrect`]:'',
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setInfo({
            'name':'',
            'email':'',
            'subject':'',
            'message':'',
        })
    }
    return (
        <div className = 'contact' id = 'ctc'>
            <h2>Let's get in touch</h2>
            <form className = "contact__form" onSubmit = {handleSubmit}>
                <input 
                    type="text"
                    required 
                    placeholder = 'Your name*' 
                    name = 'name'    
                    value = {info.name}
                    onChange = {handleChange}
                    autoComplete="off"
                />
                <input 
                    type="email" 
                    required 
                    placeholder = 'Your email*' 
                    name = 'email'
                    value = {info.email}
                    onChange = {handleChange}
                    autoComplete="off"    
                />
                <input 
                    type="text"
                    required 
                    placeholder = 'Subject*' 
                    name = 'subject'    
                    value = {info.subject}
                    onChange = {handleChange}
                    autoComplete="off"
                />
                <textarea 
                    placeholder = "Your massage*"
                     required 
                    name="message" 
                    value = {info.message}
                    onChange = {handleChange}
                    cols="30" rows="10"
                    ></textarea>
                <input  
                    className = "contactForm__submit" 
                    type="submit"
                />
            </form>
        </div>
    )
}

export default Contact
