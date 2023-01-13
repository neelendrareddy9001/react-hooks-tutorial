import React, {useState} from 'react'
import User from './Login'
import Login from './Login'

function ContextTutorial () {
    const [userName, setUserName] = useState("")
    
    return (
        <div>
            <Login setUserName={setUserName}/> <User userName = {userName}/>
        </div>
    )
}

export default ContextTutorial