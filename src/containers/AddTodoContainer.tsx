import { addTodo } from 'src/slices/todo'
import { useAppDispatch } from 'src/store/hook'

import AddTodo from '../components/AddTodo'

const AddTodoContainer = () => {
  const dispatch = useAppDispatch()

  return (
    <AddTodo
      addTodo={(text: string) => {
        dispatch(addTodo(text))
      }}></AddTodo>
  )
}

export default AddTodoContainer
