import { Action } from 'redux'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export interface SetVisibilityFilterAction extends Action<typeof SET_VISIBILITY_FILTER> {
  filter: string
}

export type FilterActionTypes = SetVisibilityFilterAction
