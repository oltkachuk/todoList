import React, { useContext } from 'react'
import Context from '../context/context'

const style = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5rem',
        marginBottom: '0.5rem',
        border: '1px solid #ccc',
        alignItems: 'center'
    },
    input: {
        marginRight: '0.5rem'
    }
}

const TodoItem = ({ todo, index, doneTodo }) => {
    const { deleteTodo } = useContext(Context)
    const classes = []
    if (todo.completed) {
        classes.push('done')
    }
    return (   
        <li style={ style.li }>
            <span className={ classes.join(' ') }>
                <input 
                    type='checkbox' 
                    style={ style.input }
                    onChange={() => doneTodo(todo.id) }
                    checked={ todo.completed }
                />
                <strong>{ index + 1 }</strong>
                &nbsp;
                { todo.title }
            </span>
            <button className='btnDelete' onClick={() => deleteTodo(todo.id)}>&times;</button>
        </li>
    )
}


export default TodoItem