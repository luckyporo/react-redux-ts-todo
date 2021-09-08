import React from 'react'

type Props = {
  onSubmit: (value: string) => void
}

const AddTodo = ({ onSubmit }: Props) => {
  let input: HTMLInputElement | null

  return (
    <form
      className="flex flex-row w-full"
      onSubmit={(e) => {
        e.preventDefault()
        if (!input?.value.trim()) {
          return
        }
        onSubmit(input.value)
        input.value = ''
      }}>
      <input
        className="w-2/3 rounded border border-gray-500 ml-4"
        ref={(el) => (input = el)}
      />
      <button
        className="flex-1 text-white bg-blue-500 border-0 py-2 px-6 mx-4 focus:outline-none hover:bg-blue-600 rounded text-lg"
        type="submit">
        添加
      </button>
    </form>
  )
}

export default AddTodo
