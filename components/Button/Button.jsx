import React from 'react'
import Style from "./button.module.css";

const Button = ({btnName, handleClick}) => {
  return (
    <div className={Style.box}>
        <button className={Style.button} onClick={() => handleClick()}>
            {btnName}
        </button>
    </div>
  )
}

export default Button