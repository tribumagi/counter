import React from 'react';
import "./Button.css"

type CounterType={
    count:number
    name:string
    callback:()=>void
disabled:boolean
}


const Button = (props:CounterType) => {

    const onClickHandler = () => {
   props.callback()
    }


    return (
        <div>
      <button className={"button"} onClick={onClickHandler} disabled={props.disabled} >{props.name}</button>
        </div>
    );
};

export default Button;