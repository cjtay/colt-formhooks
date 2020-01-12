import React from 'react';
import useInputHook from './inputHook';

function Form() {
    const [name, setName, resetName] = useInputHook('');
    const [email, setEmail, resetEmail] = useInputHook('');

    return (
        <div>
            <h1>Form Hooks</h1>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={setName} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={setEmail} />
            <p>Name: {name}</p>
            <button onClick={resetName}>reset</button>
            <p>Email: {email}</p>
            <button onClick={resetEmail}>reset</button>
        </div>
    );
}

export default Form;
