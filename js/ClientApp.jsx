const React = require('react')
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const browserHistory = ReactRouter.browserHistory
const IndexRoute = ReactRouter.IndexRoute

const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const { store } = require('./Store')
const { Provider } = require('react-redux')

const myRoutes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
  </Route>
)

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          { myRoutes() }
        </Router>
      </Provider>
    )
  }
})

App.Routes = myRoutes

module.exports = App
