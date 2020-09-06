import React from 'react'

const TimerControl =(props) => {
  const { isCounting, handleStartOrStop, handleReset } = props
  return (
    <div className="d-flex flex-row justify-content-center">
      <button className="btn btn-lg" id="start_stop" onClick={handleStartOrStop}>
        {
          !isCounting
            ? <h3><i className="fas fa-play"></i></h3>
            : <h3><i className="fas fa-pause"></i></h3>
        }
      </button>
      <button className="btn btn-lg" id="reset" onClick={handleReset}>
        <h3><i className="fas fa-redo-alt"></i></h3>
      </button>
    </div>
  )
}

export default TimerControl