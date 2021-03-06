import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const CreateInput = ({addTodos}) => {

    const [data, setData] = useState({
        id: '',
        title: '',
        desc: ''
    }) 

    const inputEvent = (e) => {
        console.log(e.target.value)
        
        const {id, name, value } = e.target;

        console.log(name, value)

        setData((prevData) => ({
            ...prevData,
            id: uuidv4(),
            [name] : value
        }

        ))

       
    }

    const submitForm = (e) => {
        e.preventDefault();
        
        addTodos(data)

        setData({
            title: '',
            desc: ''
        })
    }


    return (
        <div className="inputWrapper">
            <form onSubmit={submitForm}>
                <input type="text" onChange={inputEvent} name="title" value={data.title} id="todo"  placeholder="Enter title..." autoComplete="off" required />
                <textarea name="desc" onChange={inputEvent} value={data.desc}  placeholder="Enter description...." cols="30" rows="5" required></textarea>
                <button className="btn">+</button>
            </form>
        </div>

        
    )
}

export default CreateInput
