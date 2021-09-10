import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/store'

import { TodoState } from './types'

const initialState: TodoState[] = []

let nextTodoId = 0

const fetchTodo = (text: string) => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          id: nextTodoId++,
          text,
        }),
      300,
    )
  })
}

export const addTodo = createAsyncThunk(
  'todo/addTodo',
  async (text: string) => await fetchTodo(text),
)

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    toggleTodo: (state, action: PayloadAction<number>) => {
      const target = state.find((todo) => todo.id === action.payload)
      if (target) target.completed = !target.completed
    },
  },
  extraReducers: {
    [addTodo.fulfilled.type]: (state, action: PayloadAction<TodoState>) => {
      state.push({
        ...action.payload,
        completed: false,
      })
    },
  },
})

export const { toggleTodo } = todoSlice.actions

export const selectTodo = (state: RootState) => state.todos

export default todoSlice.reducer
