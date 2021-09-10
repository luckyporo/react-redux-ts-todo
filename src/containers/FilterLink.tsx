import Link from 'src/components/Link'
import { selectFilter, setVisibilityFilter } from 'src/slices/filter'
import { useAppDispatch, useAppSelector } from 'src/store/hook'

type Props = {
  filter: string
  children?: React.ReactNode
}

const FilterLink = (props: Props) => {
  const filter = useAppSelector(selectFilter)
  const dispatch = useAppDispatch()

  return (
    <Link
      active={props.filter === filter}
      onClick={() => dispatch(setVisibilityFilter(props.filter))}>
      {props.children}
    </Link>
  )
}

export default FilterLink
