import { Dispatch } from 'redux'

import * as actionTypes from './types'
import { AddTodoAction, ToggleTodoAction } from './types'

let nextTodoId = 0

export const changeTodos = (text: string): AddTodoAction => ({
  type: actionTypes.ADD_TODO,
  id: nextTodoId++,
  text,
})

export const addTodo = (text: string) => {
  return (dispatch: Dispatch<AddTodoAction>) => {
    setTimeout(() => {
      dispatch(changeTodos(text))
    }, 300)
  }
}

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: actionTypes.TOGGLE_TODO,
  id,
})
