import { connect } from 'react-redux'
import App from './App.react'
import ActionTypes from '../../constants/ActionTypes'

const mapStateToProps = (state, ownProps) => {
  return {
    result: state.result
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increaseNumber: () => {dispatch({type: ActionTypes.INCREASE_ACTION})},
    decreaseNumber: () => {dispatch({type: ActionTypes.DECREASE_ACTION})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
