import { Action } from 'redux'

export const ADD_TODO = 'ADD_TODO'

export const TOGGLE_TODO = 'TOGGLE_TODO'

export interface AddTodoAction extends Action<typeof ADD_TODO> {
  id: number
  text: string
}

export interface ToggleTodoAction extends Action<typeof TOGGLE_TODO> {
  id: number
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction
