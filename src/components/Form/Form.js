import React from "react";
import "./Form.css";

const Form = (props) => {
  let classList = "";

  let types = ["text", "select"];

  if (types.includes(props.type)) {
    classList += `${props.type}`;
  }//includes if

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
      <form>
      <div >
        <input placeholder={props.placeholder} className={classList}></input>
        <label>{props.label}</label>
      </div>
    </form>
    );
  }//select if 

  if (props.voucher) {
    return (

    )
  }
};//Form function

export default Form;
