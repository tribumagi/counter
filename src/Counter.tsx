import React from 'react';
import Button from "./Button";
import "./Counter.css"

type CounterType={
    count:string
    setCount:(a:string)=>void
    minValue:number
    maxValue:number
}


const Counter = (props:CounterType) => {

    const incCounter = () => {
        if(+props.count<props.maxValue) {
            props.setCount(String(+props.count + 1))
        }
    }

    const resCounter = ()=>{

        props.setCount(String(props.minValue))
    }

    return (
        <div className={"Counter"}>
            {props.count}
            <Button count={1} name={"inc"} callback={incCounter} disabled={false}/>
            <Button count={1} name={"res"} callback={resCounter} disabled={false}/>
        </div>
    );
};

export default Counter;