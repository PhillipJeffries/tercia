import React, {useState} from "react";
import "./form.scss";

import InputField from "./inputField/inputField.js";

import {URL} from "../../constants.js"


const Form = ({postData}) => {   

let defaultFormData = {
    maker: '',
    name: '',
    price: '',
    count: ''
}

const [ formData, setFormData] = useState(defaultFormData)
const [emptyFields, setEmptyFields] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault()
    for(let field in formData){
        if(formData[field]===''){
            setEmptyFields(true)
            return
        }
    }
    setEmptyFields(false)
    postData(URL, formData)
    setFormData(defaultFormData)
}



console.log('formData',formData)

    return(
        <div className="form-wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <InputField 
                    label="Производитель"
                    type="text"
                    value={formData.maker}
                    onChange={maker => setFormData({...formData, maker})}
                />
                <InputField 
                    label="Наименование"
                    type="text"
                    value={formData.name}
                    onChange={name => setFormData({...formData, name})}
                />
                <InputField 
                    label="Цена"
                    type="number"
                    value={formData.price}
                    onChange={price => setFormData({...formData, price})}
                />
                <InputField 
                    label="Количество"
                    type="number"
                    value={formData.count}
                    onChange={count => setFormData({...formData, count})}
                />
                <button>Отправить</button>
            </form>
            {
                emptyFields ? <div className="empty-fields-alert">Не все поля заполнены</div> : null
            }
        </div>
    )
};

export default Form;