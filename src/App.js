import React from "react"

import "./style/master.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Landing from "./components/pages/Landing"
import Review from "./components/pages/Review"
import LogInSignUp from "./components/pages/LogInSignUp"
import NotFound from "./components/pages/NotFound"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/login-signup" component={LogInSignUp} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
