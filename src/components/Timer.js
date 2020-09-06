import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TimerDisplay from './TimerDisplay'
import TimerControl from './TimerControl'
import Buzzer from './Buzzer'
import { startOrStop, swapMode, reset } from '../actions'

const Timer = (props) => {
  const { breakLength, sessionLength, isCounting, isSession } = props
  const { startOrStop, swapMode, reset } = props
  const buzzerRef = React.useRef(null)
  
  const lengthToDate = (length, baseTimestamp = 1577797200000) => new Date(baseTimestamp + length * 60 * 1000)
  const [clock, setClock] = React.useState(lengthToDate(sessionLength))
  
  const clockFormat = date => {
    var minutes = String(date.getHours() * 60 + date.getMinutes()).padStart(2, '0')
    var seconds = String(date.getSeconds()).padStart(2, '0')
    return minutes + ':' + seconds
  }
  
  useEffect(() => setClock(lengthToDate(sessionLength)), [sessionLength])
  
  useEffect(() => {
    let timerId = null
    if(isCounting) {
      if(clockFormat(clock) !== '00:00') {
        timerId = setInterval(() => setClock(clock => new Date(clock - 1000)), 1000)
      } else {
        buzzerRef.current.play()
        timerId = setInterval(() => {
          swapMode()
        }, 1000)
      }
      return () => clearInterval(timerId)
    } else {
      clearInterval(timerId)
    }
  }, [isCounting, clock, swapMode])
     
  useEffect(() => {
    setClock(lengthToDate(isSession ? sessionLength : breakLength))
  }, [isSession, breakLength, sessionLength])
  
  const handleReset = () => {
    reset()
    setClock(lengthToDate(sessionLength))
    buzzerRef.current.pause()
  }
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-between">
      <TimerDisplay isCounting={isCounting} timeLeft={clockFormat(clock)} isSession={isSession} />
      <TimerControl isCounting={isCounting} handleStartOrStop={startOrStop} handleReset={handleReset} />
      <Buzzer ref={buzzerRef}/>
    </div>
  )
} 

const ConnectedTimer = connect(
  state => state,
  { startOrStop, swapMode, reset }
)(Timer)

export default ConnectedTimer