import React, {useState} from 'react'

const StateTutoiral = () => {
    const [counter, setCounter] = useState(0)

    const increment = () =>{
        setCounter(counter + 1)
    };

    return (
        <div>
            {counter}
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default StateTutoiral

