import ACTION_TYPES from '../constants'

const initState = {
  breakLength: 5,
  sessionLength: 25,
  isSession: true,
  isCounting: false
}

const clock = (state = initState, action) => {
  switch(action.type) {
    case ACTION_TYPES.INCREASE_BREAK:
      return {
        ...state,
        breakLength: (state.breakLength < 60)
                        ? state.breakLength + 1
                        : state.breakLength
      }
    case ACTION_TYPES.DECREASE_BREAK:
      return {
        ...state,
        breakLength: (state.breakLength > 1)
                      ? state.breakLength - 1
                      : state.breakLength
      }
    case ACTION_TYPES.INCREASE_SESSION:
      return {
        ...state,
        sessionLength: (state.sessionLength < 60)
                          ? state.sessionLength + 1
                          : state.sessionLength
      }
    case ACTION_TYPES.DECREASE_SESSION:
      return {
        ...state,
        sessionLength: (state.sessionLength > 1)
                          ? state.sessionLength - 1
                          : state.sessionLength
      }
    case ACTION_TYPES.START_OR_STOP:
      return {
        ...state,
        isCounting: !state.isCounting
      }
    case ACTION_TYPES.SWAP_MODE:
      return {
        ...state,
        isSession: !state.isSession
      }
    case ACTION_TYPES.RESET:
      return {
        ...initState
      }
    default:
      return state
  }
}

export default clock