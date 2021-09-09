import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { toggleTodo } from 'src/actions/todo'
import { ToggleTodoAction } from 'src/actions/todo/types'
import TodoList from 'src/components/TodoList'
import { VisibilityFilters } from 'src/reducers/filter'
import { TodoState } from 'src/reducers/todo/types'

import { RootState } from '../reducers'

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

const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodos(state.todos, state.filter),
})

const mapDispatchToProps = (dispatch: Dispatch<ToggleTodoAction>) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
