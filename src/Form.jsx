import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useInputHook from './inputHook';

function Form() {
    const [name, setName, resetName] = useInputHook('');
    const [email, setEmail, resetEmail] = useInputHook('');
    const [select, setSelect] = useInputHook('');
    const [movie, setMovie] = useState('');

    useEffect(() => {
        async function getData() {
            const res = await axios.get(
                `https://swapi.co/api/films/${select}/`
            );
            setMovie(res.data.title);
        }
        getData();
        console.log('useEffect');
    }, [select]); // useEffect will only run when the drop down select is changed

    return (
        <div>
            <h1>Form Hooks</h1>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={setName} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={setEmail} />
            <label htmlFor="select">Choose one</label>
            <select
                name="select"
                id="select"
                value={select}
                onChange={setSelect}
            >
                {/* <option value="" selected disabled hidden>
                    Choose here
                </option> */}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <p>Name: {name}</p>
            <button onClick={resetName}>reset</button>
            <p>Email: {email}</p>
            <button onClick={resetEmail}>reset</button>
            {movie === '' ? <></> : <p>Selected: {movie}</p>}
        </div>
    );
}

export default Form;
