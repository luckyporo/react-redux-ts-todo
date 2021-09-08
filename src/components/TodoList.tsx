import React from 'react'

import Todo from './Todo'

type Props = {
  todos: {
    id: number
    completed: boolean
    text: string
  }[]
  toggleTodo: (id: number) => void
}

const TodoList = ({ todos, toggleTodo }: Props) => (
  <ul className="mx-4 mt-2 p-2">
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

export default TodoList
