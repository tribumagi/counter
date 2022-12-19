import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import Button from "./Button";
import "./SetValue.css"
import "./Input.css"

type setValueType = {
    maxValue: number
    minValue: number
    setMax: (Max: number) => void
    setMin: (Min: number) => void
    setCount:(c:string) => void
callback:()=>void

}

const SetValue = (props: setValueType) => {



    const MaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        props.setMax(+value)
        if (+value<=props.minValue || props.minValue<0){
            props.setCount("Incorrect value")

        } else {

            props.setCount("Enter values and press set")
        }

        // props.setMax(+value)
    }

    const MinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value

        if (props.maxValue<=+value || +value<0){
            props.setCount("Incorrect value")

        } else {

            props.setCount("Enter values and press set")
        }
        props.setMin(+value)

    }



    return (
        <div className={"SetValue"}>
            <div>
                setMax
                <input
                    className={"input"}
                    value={props.maxValue}
                    onChange={MaxChangeHandler}
                    type={"number"}
                />
            </div>
            <div>
                setMin
                <input
                    className={"input"}
                    value={props.minValue}
                    type={"number"}
                    onChange={MinChangeHandler}
                />
            </div>
            <div></div>
            <Button count={1}
                    name={'set'}
                    callback={props.callback}
                    disabled={false}
            />
        </div>
    );
};

export default SetValue;