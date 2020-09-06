import React from 'react'
import { connect } from 'react-redux'
import { increaseSession, decreaseSession } from '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const SessionControl = (props) => {
  const { sessionLength, increaseSession, decreaseSession, isCounting } = props
  return (
    <div className="d-flex flex-column justify-content-center align-items-between">
      <button type="button" id="session-increment" className="btn btn-lg"
        onClick={increaseSession} disabled={isCounting} >
        <FontAwesomeIcon className="up-down-icon" icon={faChevronUp} />
      </button>
      <h4 id="session-length">{sessionLength}</h4>
      <button type="button" id="session-decrement" className="btn btn-lg"
        onClick={decreaseSession} disabled={isCounting} >
        <FontAwesomeIcon className="up-down-icon" icon={faChevronDown} />
      </button>
    </div>
  )
}

const ConnectedSessionControl = connect(
  state => ({ 
    sessionLength: state.sessionLength,
    isCounting: state.isCounting
  }),
  { increaseSession, decreaseSession }
)(SessionControl)

export default ConnectedSessionControl