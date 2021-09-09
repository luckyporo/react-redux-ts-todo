import * as actionTypes from './types'
import { AddTodoAction, ToggleTodoAction } from './types'

let nextTodoId = 0

export const addTodo = (text: string): AddTodoAction => ({
  type: actionTypes.ADD_TODO,
  id: nextTodoId++,
  text,
})

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: actionTypes.TOGGLE_TODO,
  id,
})
