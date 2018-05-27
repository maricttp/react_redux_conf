import ActionTypes from '../constants/ActionTypes'

export default function (state = 0, action) {
  switch (action.type) {
    case ActionTypes.INCREASE_ACTION:
      return ++state
    case ActionTypes.DECREASE_ACTION:
      return --state
    default:
      return state
  }
}
