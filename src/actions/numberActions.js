import ActionTypes from '../constants/ActionTypes'

export function numberIncrease () {
  return {
    type: ActionTypes.INCREASE_ACTION
  }
}

export function numberDecrease () {
  return {
    type: ActionTypes.DECREASE_ACTION
  }
}
