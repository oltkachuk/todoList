import React from 'react'
import CreateTodo from './components/CreateTodo';
import Context from './context/context'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = React.useState([])
 

  function doneTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }
  function addTodo(title) {
    setTodos(todos.concat([{
      id: Date.now(),
      completed: false,
      title
    }]))
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{ deleteTodo }}>
      <div className="wrapper">
        <h1>Todo List</h1>
        <CreateTodo onCreate={ addTodo }/>
        <TodoList todos = { todos } doneTodo = { doneTodo }/>    
      </div>
    </Context.Provider>
  );
}

export default App;
