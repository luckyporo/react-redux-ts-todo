import { Reducer } from 'redux'
import { FilterActionTypes } from 'src/actions/filter/types'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

const initialState: string = VisibilityFilters.SHOW_ALL

const filterReducer: Reducer<string, FilterActionTypes> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default filterReducer
