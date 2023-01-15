import React,{useState} from 'react'
import axios from 'axios'
import Child from './Child';

function CallBackTutorial() {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Yo, pls sub to the channel!");

    const returnComment = () => {
        return data;
    };

  return (
    <div>
       
    </div>
  )
}


export default CallBackTutorial