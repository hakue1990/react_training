import React from 'react'

const Form = ({ submitFn }) => {
    return (
        <form onSubmit={submitFn}>
            <input placeholder='name' name='name' />
            <input placeholder='link' name='link' />
            <input placeholder='image' name='image' />
            <textarea placeholder='description' name='description' />
            <button type='submit'>add item</button>
        </form>
    );
}

export default Form;