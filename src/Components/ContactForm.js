import React,{useState} from 'react'
import styles from './ContactForm.module.css'
import Buttons from './Buttons/Buttons.js'
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import contact from './images/contact.svg'


const ContactForm = () => {
  const [Name,setName]= useState("Raja");
  const [Email,setEmail]= useState("rajamoturi22@gmail.com");
  const [Text,setText]= useState("Abcdefgh");


  const onContact = () => {
    console.log("VIA CHAT SUPPORT");
  };

  const onSubmit = (event) =>{
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    
  }

  return (
    <div className= {styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
              <Buttons onClick={onContact} text='VIA CHAT SUPPORT' icon={<MdOutlineMessage fontSize='24px'/>} />
              <Buttons onClick={onContact} text='VIA CALL' icon={<IoMdCall fontSize='24px'/>} />
            </div>
            <Buttons onClick={onContact} isSecondary={true} text='VIA EMAIL FORM' icon={<CiMail fontSize='24px'/>} />
            <form onSubmit={onSubmit}>
              <div className={styles.from_control}>
                <label htmlFor="">Name</label>
                <input type="text" name='Name' />
              </div>

              <div className={styles.from_control}>
                <label htmlFor="">Email</label>
                <input type="text" name='Email' />
              </div>

              <div className={styles.from_control}>
                <label htmlFor="">Text</label>
                <textarea name='Text' rows="8"  />
              </div>

              <div style={{
                display : "flex",
                justifyContent : "end",

              }}>
              <Buttons text='SUBMIT'  />
              </div>
              <div>
                {Name + " " + Email + " " +Text}
              </div>
              
            </form>
          </div>
        <div className={styles.contact_image}>
          <img src={contact} alt="" height='550px' width='540' />
        </div>

    </div>
  )
}

export default ContactForm