import React, { useState } from 'react'

import AddTodo from './components/AddTodo'
import Footer from './components/Footer'
import TodoList from './components/TodoList'

let nextTodoId = 0

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

const getVisibleTodos = (
  todos: {
    id: number
    completed: boolean
    text: string
  }[],
  filter: string,
) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const App = () => {
  const [todos, setTodos] = useState<{ id: number; completed: boolean; text: string }[]>(
    [],
  )

  const [filter, setFilter] = useState<string>(VisibilityFilters.SHOW_ALL)

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const onSubmit = (value: string) => {
    setTodos([...todos, { id: nextTodoId++, text: value, completed: false }])
  }

  const setVisibilityFilter = (filter: string) => setFilter(filter)

  return (
    <div>
      <AddTodo onSubmit={onSubmit} />
      <TodoList todos={getVisibleTodos(todos, filter)} toggleTodo={toggleTodo} />
      <Footer filter={filter} setVisibilityFilter={setVisibilityFilter} />
    </div>
  )
}

export default App
