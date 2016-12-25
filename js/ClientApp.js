/* global React ReactDOM */
  // Declaring the global Reacy variables in  a comment for Standard

var div = React.DOM.div
var MyTitle = require('./MyTitle')

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Props are great!', color: 'red'}),
    MyTitleFact({title: 'Props everywhere.', color: 'mediumaquamarine'}),
    MyTitleFact({title: 'I <3 Props'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
