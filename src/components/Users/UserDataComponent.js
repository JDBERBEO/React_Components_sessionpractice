import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from "react-router-dom";

export const UserDataComponent = () => {
    let history = useHistory();
      
    function handleClick() {
        history.goBack("/users");
    }

    let { id } = useParams();

    const [userData, setUserData] = useState()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data =>{
            setUserData(data)
        })
        }, [])
        console.log(userData)
    
    let username
    if (!userData){
        return <h1>Loading1...</h1>
    }else{
        const {name, username, email, phone, website, company} = userData
        const {name: nameCompany, catchPhrase, bs} = company
        console.log(username, email, nameCompany)
        return (<>
            <button type="button" onClick={handleClick}>
                Go back
            </button>
            <div>
                <h2>DATOS DE {userData.name}</h2>
                <ul>
                    <li>Nombre de Usuario: {username}</li>
                    <li>Correo Electrónico: {email}</li>
                    <li>Número de celular: {phone}</li>
                    <li>Página Web: {website}</li>
                    <li>Nombre de empresa: {nameCompany}</li>
                    <li>Empresa catchPhrase: {catchPhrase}</li>
                    <li>Empresa BS: {bs}</li>
                </ul>
            </div>
            </>
        )
    }
}
