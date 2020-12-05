import React from 'react'
import TodoItem from './TodoItem'

const style = {
    ul: {
        listStyle: 'none',
        padding: '0px',
        margin: '0px'
    }
}


const TodoList = (props) => {
    return (
        <ul style={ style.ul }>
            { props.todos.map((todo, idx) => {
                return <TodoItem 
                    todo={ todo } 
                    index={ idx }
                    key={ todo.id }
                    doneTodo={ props.doneTodo }
                />               
            }) }
        </ul>
    )
}

export default TodoList