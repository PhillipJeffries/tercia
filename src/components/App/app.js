import React from "react";
import "./app.scss";


import { useState, useEffect } from "react";
import {URL} from "../../constants.js"


import Form from "../form/form.js"
import Table from "../table/table.js"


const App = () => {   

   

    const [items, setItems] = useState([])

   


    const getData = () => {
        fetch(URL)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setItems(data)
          })
    }


    useEffect(()=>{
        getData()
    },[])


    const postData = (url, payload) => {
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(payload),
            headers: {"Content-type": "application/json"},
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setItems(data)
        })
    }

    

    const deleteData = (id) => {
        fetch(`${URL}${id}`, {
            method: 'DELETE', 
            headers: {"Content-type": "application/json"},
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setItems(data)
        })
    }


    return(
        <div className="app">
            <h1>заказ</h1>
            <Form postData = {postData}/>
            {
                items.length ?
                <Table items = {items} deleteItem={deleteData}/> :
                <h2>Еще нет заказа</h2>
            }
        
        </div>
    )
};

export default App;