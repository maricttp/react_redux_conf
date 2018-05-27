import React from 'react'
import number from '../../../src/reducers/number'
import ActionTypes from '../../../src/constants/ActionTypes'

describe('number reducer', () => {
  it('Action type === INCREASE_ACTION', () => {
    expect(number(1, {type: ActionTypes.INCREASE_ACTION})).toEqual(2)
  })
})
