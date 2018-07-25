import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DevTools from '../../helper/DevTools'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
// import materialUiTheme from '../../styles/materialUiTheme'

import Button from '../../components/Button/Button.react'

import './app.scss'

class App extends Component {
  constructor (props) {
    super(props)
  }

  getChildContext () {
    return {
      muiTheme: getMuiTheme({})
    }
  }

  getDevTools () {
    // only render DevTools, if certain conditions are met
    // DevTools consume a lot of performance and can lead to sluggish ux
    if (process.env.NODE_ENV === 'development' || this.getUrlParameter('devTools') === 'true') {
      return <DevTools />
    }
    return null
  }

  render () {
    const {result, increaseNumber, decreaseNumber} = this.props
    return (
      <div>
      {this.getDevTools()}
      <div className='app__wrapper app__wrapper--font-size'>
        <Button labelText='Decrease by 1' onClick={decreaseNumber}/>
        <h1>{result}</h1>
        <Button labelText='Increase by 1' onClick={increaseNumber}/>
      </div>
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object
}

export default App
