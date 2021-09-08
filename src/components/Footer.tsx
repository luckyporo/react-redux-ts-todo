import React from 'react'

import { VisibilityFilters } from '../App'
import Link from './Link'

type Props = {
  filter: string
  setVisibilityFilter: (filter: string) => void
}

const Footer = ({ filter, setVisibilityFilter }: Props) => (
  <div>
    <span>Show: </span>
    <Link
      active={VisibilityFilters.SHOW_ALL === filter}
      onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ALL)}>
      All
    </Link>
    <Link
      active={VisibilityFilters.SHOW_ACTIVE === filter}
      onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)}>
      Active
    </Link>
    <Link
      active={VisibilityFilters.SHOW_COMPLETED === filter}
      onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)}>
      Completed
    </Link>
  </div>
)

export default Footer
