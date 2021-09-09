import { Reducer } from 'redux'
import * as actionTypes from 'src/actions/todo/types'
import { TodoActionTypes } from 'src/actions/todo/types'

import { TodoState } from './types'

const initialState: TodoState[] = []

const TodoReducer: Reducer<TodoState[], TodoActionTypes> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ]
    case actionTypes.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      )
    default:
      return state
  }
}

export default TodoReducer
