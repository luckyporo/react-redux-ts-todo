import * as actionTypes from './types'
import { SetVisibilityFilterAction } from './types'

export const setVisibilityFilter = (filter: string): SetVisibilityFilterAction => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  filter,
})
