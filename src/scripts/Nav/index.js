var React = require('react')
var Button = require('.././Nav/Button')
var Search = require('.././Nav/Search')

var Nav = React.createClass({
  render: function(){
    return (    	
      <nav>
      	<div className="brand-nav"></div>
        <div className="row">
        	<Button />
        	<Search />
        </div>
      </nav>
    )
  }
});

module.exports = Nav