import TodoList from 'src/components/TodoList'
import { selectFilter, VisibilityFilters } from 'src/slices/filter'
import { selectTodo, toggleTodo } from 'src/slices/todo'
import { TodoState } from 'src/slices/todo/types'
import { useAppDispatch, useAppSelector } from 'src/store/hook'

const getVisibleTodos = (todos: TodoState[], filter: string) => {
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

const VisibleTodoList = () => {
  const todo = useAppSelector(selectTodo)
  const filter = useAppSelector(selectFilter)
  const dispatch = useAppDispatch()

  return (
    <TodoList
      todos={getVisibleTodos(todo, filter)}
      toggleTodo={(id: number) => dispatch(toggleTodo(id))}></TodoList>
  )
}

export default VisibleTodoList
