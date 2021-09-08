import React from 'react'

type Props = {
  onClick: () => void
  completed: boolean
  text: string
}

const Todo = ({ onClick, completed, text }: Props) => (
  <li
    onClick={onClick}
    aria-hidden="true"
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}>
    {text}
  </li>
)

export default Todo
