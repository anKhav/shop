import React, {useState} from 'react';
import MyBtn from "../UI/MyBtn/MyBtn";
import axios from 'axios'


const MyForm = () => {

    const [data, setData] = useState({
        name:'',
        email:'',
        message:''
    })

    const url = ''

    const handle = (e) => {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    const submit = (e) => {
        e.preventDefault()
        axios.post(url, {
            name:data.name,
            email:data.email,
            message:data.message
        })
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <form className='MyForm' onSubmit={(e) => submit(e)}>
            <div className="MyForm__inputs">
                <div className="input__wrapper">
                    <label className='MyForm__label' htmlFor="name">Name</label>
                    <input
                        className='MyForm__input'
                        type="text"
                        id='name'
                        onChange={(e) =>{ handle(e)}}
                        value={data.name}
                    />
                </div>
                <div className="input__wrapper">
                    <label className='MyForm__label' htmlFor="email">Email</label>
                    <input
                        className='MyForm__input'
                        type="text"
                        id='email'
                        onChange={(e) =>{ handle(e)}}
                        value={data.email}
                    />
                </div>
            </div>
            <div className="input__wrapper">
                <label className='MyForm__label' htmlFor="message">Message</label>
                <textarea
                    className='MyForm__textarea'
                    id='message'
                    onChange={(e) =>{ handle(e)}}
                    value={data.message}
                ></textarea>
            </div>
            <MyBtn type='submit' className='MyForm__btn'>Send Message</MyBtn>
        </form>
    );
};

export default MyForm;