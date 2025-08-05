import React from 'react'
import'./Contact.css'
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>
               We’d love to hear from you! Whether you have a question, suggestion, or need support, feel free to reach out using the form below. We're here to help and always ready to connect with our university community. 
            </p>
            <ul>
                <li>educore@gmail.com</li>
                <li>+94 772 056 235</li>
                <li>Kandy Road, Kaduwela,Sri Lanka</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Contact
