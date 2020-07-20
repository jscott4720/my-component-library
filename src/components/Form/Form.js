import React from "react";
import "./Form.css";

const Form = (props) => {
  let classList = "";
  let otherClass = ""

  let types = ["text", "select", 'submit'];

  if (types.includes(props.type)) {
    classList += `${props.type}`;
  }//includes if

  if (props.size) {
    otherClass += ` submit-${props.size}`
  }
 

  if (props.small) {
    classList += ` ${props.type}-small`;
  }//small if

  if (props.large) {
    classList += ` ${props.type}-large`;
  }//large if

  if (props.dark){
      classList += ` ${props.type}-dark`

  }
  if (props.form) {
    return (
      <form>
        <label>{props.label}</label>
        <br />
        <input
          className={classList}
          type={props.type}
          placeholder={props.placeholder}
        ></input>
      </form>
    );
  }//form if

  if (props.select) {
    return (
      <select className = {classList}>
        <option>{props.placeholder}</option>
      </select>
    );
  }//select if 

  if (props.voucher) {
    return  <form>
    <div>
      <input className = {classList} type = {props.type} placeholder={props.placeholder}></input>
      <input className = {otherClass} type = {props.otherType} value = {props.value}></input>

    </div>
  </form>

   }// voucher if
  
};//Form function

export default Form;
