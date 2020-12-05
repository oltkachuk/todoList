import React, { useState } from 'react'

const style = {
    wrapSectionCreate: {
        padding: '1rem',
        marginBottom: '0.5rem'
    }
}

const CreateTodo = ({ onCreate }) => {
    const createHendler = (e) => {
        e.preventDefault()
        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }
    const [value, setValue] = useState('')
    return (
        <form style={ style.wrapSectionCreate } onSubmit={createHendler}>
            <input value={ value } onChange={ e => setValue(e.target.value) }/>
            &nbsp;
            <button type='submit'>Create Todo</button>
        </form>
    )
}

export default CreateTodo