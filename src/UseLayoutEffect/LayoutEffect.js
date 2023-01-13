import { useLayoutEffect, useEffect, useRef } from "react"

function LayoutEffect ()  {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect (() => {
        inputRef.current.value = "HELLO";
    }, []);

    
return (
    <div className="App">
        <input ref={inputRef} value="PEDRO" style={{width: 400, height: 150}}/>
    </div>
)
}


export default LayoutEffect