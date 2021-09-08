import React from 'react'

import { VisibilityFilters } from '../App'
import Link from './Link'

type Props = {
  filter: string
  setVisibilityFilter: (filter: string) => void
  total: number
}

const Footer = ({ filter, setVisibilityFilter, total }: Props) => (
  <div className="mx-4 my-2 p-2 flex items-center">
    <span className="mr-10">共{total}个</span>
    <Link
      active={VisibilityFilters.SHOW_ALL === filter}
      onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ALL)}>
      全部
    </Link>
    <Link
      active={VisibilityFilters.SHOW_ACTIVE === filter}
      onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)}>
      待办
    </Link>
    <Link
      active={VisibilityFilters.SHOW_COMPLETED === filter}
      onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)}>
      完成
    </Link>
  </div>
)

export default Footer
