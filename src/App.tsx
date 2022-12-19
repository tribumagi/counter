import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import Counter from "./Counter";
import SetValue from "./SetValue";


function App() {

    let [maxValue, setMaxValue] = useState(0)
    let [minValue, setMinValue] = useState(0)

    let [count, setCount]= useState(String(minValue))

    const setSet = () =>{
        if (count!=="Incorrect value") {
            setCount(String(minValue))
        }
    }

    return (
        <div>
            <SetValue
                maxValue={maxValue}
                minValue={minValue}
                setMax={setMaxValue}
                setMin={setMinValue}
                callback={setSet}
                setCount={setCount}
            />
            <Counter count={count} setCount={setCount} minValue={minValue} maxValue={maxValue}/>
        </div>
    );
}


export default App;
