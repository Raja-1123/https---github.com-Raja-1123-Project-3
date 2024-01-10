import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import styles from './Buttons.module.css'

const Buttons = ({text , icon, isSecondary , ...rest}) => {
  return (
    <button

    {...rest}    
    className= {isSecondary ? styles.secondary_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Buttons