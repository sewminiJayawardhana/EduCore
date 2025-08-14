import React from 'react'
import'./Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a6a716ba-8663-44ee-b8bd-5db719f34ad0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>
               We’d love to hear from you! Whether you have a question, suggestion, or need support, feel free to reach out using the form below. We're here to help and always ready to connect with our university community. 
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />educore@gmail.com</li>
                <li><img src={phone_icon} alt="" />+94 772 056 235</li>
                <li><img src={location_icon} alt="" />Kandy Road, Kaduwela,Sri Lanka</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label> Your Name</label>
            <input type="text" name="name" placeholder="Enter Yor Name"  required/>
            <label> Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter Your Phone Number" required/>
            <label> Write Your Messages here.</label>
            <textarea name="message" rows='6' placeholder="Enter Your Message" required></textarea>
            <button type='submit' className='btn dark-btn'> Submit Now. <img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
