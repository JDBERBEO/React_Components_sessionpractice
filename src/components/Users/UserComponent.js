import React, {useState, useEffect} from 'react'
import { FaBeer } from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const UserComponent = () => {
    const [users, setUsers] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>{
            setUsers(data)
        })
        }, [])
        console.log(users)
    
    let user
    if (!users){
        return <h1>Loading...</h1>
    }else{
        [user] = users
    }
    
    return (<>
        <div>
           <div className="App">
                <header className="App-header">
                    <FaBeer />
                    {
                    users.map((user)=>
                        <li key={user.id}><Link to={`users/${user.id}`}>{user.name}</Link></li>)
                    }
                </header>
            </div>
        </div></>
    )
}
