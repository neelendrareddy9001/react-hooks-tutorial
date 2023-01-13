import React, {useState} from 'react'
import StateTutoiral from './StateTutorial';

const StateTutorial1 = () =>{
    const [inputValue, setInputValue] = useState("Pedro")

    let changeHandler = (event) =>{
        const newValue = event.target.value;
        setInputValue(newValue)
    }

    return (
        <div>
            <input onChange={changeHandler} placeholder='Enter Something....'/>
            {inputValue}
        </div>
    );
};

export default StateTutorial1