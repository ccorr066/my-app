import React from "react"
import "./style/master.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Landing from "./components/pages/Landing"
import CreateReview from "./components/pages/Review"
import SearchIt from "./components/pages/SearchIt"
import MostRecent from "./components/pages/MostRecent"
import NotFound from "./components/pages/NotFound"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/create-review" component={CreateReview} />
        <Route exact path="/most-recent" component={MostRecent} />
        <Route exact path="/search-it" component={SearchIt} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
