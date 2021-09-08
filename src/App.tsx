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

  const visibleTodos = getVisibleTodos(todos, filter)

  return (
    <div className="flex flex-col w-1/2 mx-auto bg-white rounded-lg shadow-md">
      <div className="text-center py-5 mb-5">
        <h2 className="text-2xl text-gray-900 font-medium">TODO</h2>
      </div>
      <AddTodo onSubmit={onSubmit} />
      <TodoList todos={visibleTodos} toggleTodo={toggleTodo} />
      <Footer
        total={visibleTodos.length}
        filter={filter}
        setVisibilityFilter={setVisibilityFilter}
      />
    </div>
  )
}

export default App
