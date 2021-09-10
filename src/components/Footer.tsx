import React from 'react'
import FilterLink from 'src/containers/FilterLink'
import { VisibilityFilters } from 'src/slices/filter'

const Footer = () => (
  <div className="mx-4 my-2 p-2 flex items-center">
    <span>展示</span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>全部</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>待办</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>完成</FilterLink>
  </div>
)

export default Footer
