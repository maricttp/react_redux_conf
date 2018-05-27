import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'

class Button extends Component {
  constructor (props) {
    super(props)

  }

  render () {
    const {labelText, onClick} = this.props
    return (
      <RaisedButton
        label={labelText}
        onClick={onClick}
      />
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired
}

export default Button
