var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div
var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Props are great!', color: 'red'}),
    MyTitleFact({title: 'Props everywhere.', color: 'mediumaquamarine'}),
    MyTitleFact({title: 'I <3 Props'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
