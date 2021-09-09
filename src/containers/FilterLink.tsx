import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { setVisibilityFilter } from 'src/actions/filter'
import { SetVisibilityFilterAction } from 'src/actions/filter/types'
import Link from 'src/components/Link'
import { RootState } from 'src/reducers'

type OwnProps = {
  filter: string
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  active: ownProps.filter === state.filter,
})

const mapDispatchToProps = (
  dispatch: Dispatch<SetVisibilityFilterAction>,
  ownProps: OwnProps,
) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
