var React = require('react')
var Nav = require('.././Nav')

var Frame = React.createClass({
	render: function(){
		return(
			<div className="container">
				<Nav />
				<div className="row">
					<main className="content">
						{this.props.children}
					</main>
				</div>
			</div>
		)
	}
});

module.exports = Frame