var React = require('react')
var ReactDOM = require('react-dom')
var Will = require('./will')


var Teste = React.createClass({
  render: function(){
    return (
      <div>
        <div><Will /></div>        
      </div>
    )
  }
});

ReactDOM.render(<Teste />, document.getElementById('app'));