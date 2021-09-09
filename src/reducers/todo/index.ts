import produce from 'immer'
import { Reducer } from 'redux'
import * as actionTypes from 'src/actions/todo/types'
import { TodoActionTypes } from 'src/actions/todo/types'

import { TodoState } from './types'

const initialState: TodoState[] = []

const TodoReducer: Reducer<TodoState[], TodoActionTypes> = (
  state = initialState,
  action,
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.ADD_TODO:
        draft.push({
          id: action.id,
          text: action.text,
          completed: false,
        })
        break
      case actionTypes.TOGGLE_TODO:
        {
          const target = draft.find((todo) => todo.id === action.id)
          if (target) target.completed = !target.completed
        }
        break
    }
  })
}

export default TodoReducer
