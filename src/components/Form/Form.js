import React from 'react';
import "./Form.css";


const Form = ({ submitFn }) => {
    return (
        <form onSubmit={submitFn} className='Form__wrapper'>
            <input placeholder='name' name='name' />
            <input placeholder='link' link='link' />
            <input placeholder='image' image='image' />
            <textarea placeholder='description' description='description' />
            <button type='submit'>add item</button>
        </form>
    );
}

export default Form;