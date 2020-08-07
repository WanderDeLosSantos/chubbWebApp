import React, { Fragment} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// Components
import Main from './components/main/Main'
import CreateTicket from './components/create-ticket/CreateTicket'
import Help from './components/help/Help'
import UserDash from './components/user-dash/UserDash'
import TicketStatus from './components/ticket-status/TicketStatus'


export default () => {
  return (
    <Fragment>
      <Switch>
      <div className="App">
        <header className="App-header">
          <Main/>
        </header>
      </div>
        <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/user-dashboard" component={UserDash} />
          <Route exact path="/create-ticket" component={CreateTicket} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/ticket-status" component={TicketStatus} />
        </Router>
      </Switch>
    </Fragment>
  );
}

