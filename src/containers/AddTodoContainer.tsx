import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addTodo } from 'src/actions/todo'
import { AddTodoAction } from 'src/actions/todo/types'
import { RootState } from 'src/reducers'

import AddTodo from '../components/AddTodo'

const mapStateToProps = (state: RootState) => state

const mapDispatchToProps = (dispatch: Dispatch<AddTodoAction>) => ({
  addTodo: (text: string) => dispatch(addTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
