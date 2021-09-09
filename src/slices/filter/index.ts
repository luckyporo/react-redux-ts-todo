import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

const initialState: string = VisibilityFilters.SHOW_ALL

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setVisibilityFilter: (state, action: PayloadAction<string>) => {
      state = action.payload
    },
  },
})

export default filterSlice.reducer
