import { connect } from 'react-redux'
import App from './App.react'
import {numberIncrease , numberDecrease} from '../../actions/numberActions'

const mapStateToProps = (state) => {
  return {
    result: state.number
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseNumber: () => { dispatch(numberIncrease()) },
    decreaseNumber: () => { dispatch(numberDecrease()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
