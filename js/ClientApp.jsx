var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')


var MyFirstComponent = function () {
  return (
    <div>
      <MyTitle title="JSX is awesome" color="mediumaquamarine"/>
      <MyTitle title="Hey" color="blue"/>
      <MyTitle title="hmm" color="papayawhip"/>
    </div>
  )
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
