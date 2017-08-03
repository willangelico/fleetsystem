var React = require('react')
var ReactRouter = require('react-router')
var List = require('.././List')

var Main = React.createClass({
  render: function(){
    return (
      	<div className="row">
      		<List />
      	</div>      	        
    )
  }
});


module.exports = Main