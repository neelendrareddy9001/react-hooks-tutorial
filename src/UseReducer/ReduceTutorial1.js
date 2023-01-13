import React, {useReducer} from 'react'

//Defining Reducer Function from UseReducer function as parameter
const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {count: state.count  +  1, showText: state.showText}
        case "toggleShowText":
            return {count: state.count, showText: !state.showText}
        default : 
            return state
    }
}
const ReduceTutorial1 = () =>{
    //Single State Declaration
    // Reducer function as an parameter
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})

    return (
        <div>
            <h1>{state.count}</h1>
            <button
              onClick={() => {
                dispatch({type : "INCREMENT"});
                dispatch({type : "toggleShowText"})
              }}  
            >Click
            </button>
            {state.showText && <p>This is a Small Text</p> }
        </div>
    );
};

export default ReduceTutorial1