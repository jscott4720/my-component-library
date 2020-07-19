import React from 'react';
import "./Button.css"


const Button = (props) =>{
    let classList = '';

    let types = ['primary', 'danger', 'success', 'warning', 'default']

    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (props.large) {
        classList += ` button-large` 
    }
    if (props.outline) {
        classList += ` button-${props.type}-outline`
    }
    if (props.light) {
        classList += ` button-${props.type}-light`
    }

   
   
   return <button className ={classList}>
        {props.label}
    </button>
}

export default Button; 