import React from 'react';
import ConnectedBreakControl from './BreakControl'
import ConnectedSessionControl  from './SessionControl'
import ConnectedTimer from './Timer'
import 'bootstrap/dist/css/bootstrap.css'
import './App.scss'

const Title = (props) => <h1 id="title">Pomodoro Clock</h1>
const BreakLable = (props) => <h3 id="break-label">Break Length</h3>
const SessionLable = (props) => <h3 id="session-label">Session Length</h3>

const App = (props) => {
  return (
    <div className="container-fluid text-center p-3">
      <div className="row">
        <div className="col-sm-4 offset-sm-4">
          <div className="row">
            <div className="col-sm-12 p-4">
              <Title />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <BreakLable />
            </div>
            <div className="col-sm-6">
              <SessionLable />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <ConnectedBreakControl />
            </div>
            <div className="col-sm-6">
              <ConnectedSessionControl />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <ConnectedTimer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
