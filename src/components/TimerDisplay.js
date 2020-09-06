import React from 'react'

const TimerDisplay = (props) => {
  const { isSession, timeLeft } = props

  return (
    <div className="d-flex justify-content-center align-items-between pb-4">
      <div className="d-flex flex-column justify-content-center align-items-between border rounded-circle" 
        id="timer-display">
        <h2 className="p-4" id="timer-label">{isSession ? 'Session' : 'Break'}</h2>
        <h2 className="p-4" id="time-left">{timeLeft}</h2>
      </div>
    </div>
  )
}

export default TimerDisplay