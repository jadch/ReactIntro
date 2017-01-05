const React = require('react')
const ReactDOM = require('react-dom')

const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const hashHistory = ReactRouter.hashHistory

const Landing = require('./Landing')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
  </Router>
  )

ReactDOM.render(<App />, document.getElementById('app'))
