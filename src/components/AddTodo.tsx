import React from 'react'

type Props = {
  onSubmit: (value: string) => void
}

const AddTodo = ({ onSubmit }: Props) => {
  let input: HTMLInputElement | null

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!input?.value.trim()) {
            return
          }
          onSubmit(input.value)
          input.value = ''
        }}>
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
