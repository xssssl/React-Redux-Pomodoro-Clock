import ACTION_TYPES from '../constants'

export const increaseBreak = (props) => ({
  type: ACTION_TYPES.INCREASE_BREAK
})

export const decreaseBreak = (props) => ({
  type: ACTION_TYPES.DECREASE_BREAK
})

export const increaseSession = (props) => ({
  type: ACTION_TYPES.INCREASE_SESSION
})

export const decreaseSession = (props) => ({
  type: ACTION_TYPES.DECREASE_SESSION
})

export const startOrStop = (props) => ({
  type: ACTION_TYPES.START_OR_STOP
})

export const swapMode = (props) => ({
  type: ACTION_TYPES.SWAP_MODE
})

export const reset = (props) => ({
  type: ACTION_TYPES.RESET
})