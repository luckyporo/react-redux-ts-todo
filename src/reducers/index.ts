import { combineReducers } from 'redux'

import filter from './filter'
import todos from './todo'
import { TodoState } from './todo/types'

export type RootState = {
  todos: TodoState[]
  filter: string
}

export default combineReducers({
  todos,
  filter,
})
