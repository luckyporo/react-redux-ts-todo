import { connect } from 'react-redux'
import { addTodo } from 'src/actions/todo'
import { RootState } from 'src/reducers'

import AddTodo from '../components/AddTodo'

const mapStateToProps = (state: RootState) => state

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (text: string) => dispatch(addTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
