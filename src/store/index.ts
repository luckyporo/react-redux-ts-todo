import { configureStore } from '@reduxjs/toolkit'
import FilterReducer from 'src/slices/filter'
import TodoReducer from 'src/slices/todo'

const store = configureStore({
  reducer: {
    todos: TodoReducer,
    filter: FilterReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
