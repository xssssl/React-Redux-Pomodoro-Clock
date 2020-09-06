import React from 'react'
import { connect } from 'react-redux'
import { increaseBreak, decreaseBreak } from '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'

const BreakControl = (props) => {
  const { breakLength, increaseBreak, decreaseBreak, isCounting } = props
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-between">
      <button type="button" id="break-increment" className="btn btn-lg"
        onClick={increaseBreak} disabled={isCounting} >
        <FontAwesomeIcon className="up-down-icon" icon={faChevronUp} />
      </button>
      <h4 id="break-length">{breakLength}</h4>
      <button type="button" id="break-decrement" className="btn btn-lg"
        onClick={decreaseBreak} disabled={isCounting} >
        <FontAwesomeIcon className="up-down-icon" icon={faChevronDown} />
      </button>
    </div>
  )
}

const ConnectedBreakControl = connect(
  state => ({ 
    breakLength: state.breakLength,
    isCounting: state.isCounting
  }),
  { increaseBreak, decreaseBreak }
)(BreakControl)

export default ConnectedBreakControl
