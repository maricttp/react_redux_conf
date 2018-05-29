import React, { Component } from 'react'
import Button from '../../components/Button/Button.react'

import './app.scss'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {result, increaseNumber, decreaseNumber} = this.props
    return (
      <div className='app__wrapper app__wrapper--font-size'>
        <Button labelText='Decrease by 1' onClick={decreaseNumber}/>
        <h1>{result}</h1>
        <Button labelText='Increase by 1' onClick={increaseNumber}/>
      </div>
    )
  }
}

export default App
