var React = require('react')

var List = React.createClass({
  render: function(){
    return (
      <table>
      	<thead>
      		<tr>
      			<th></th>
      			<th>Placa</th>
      			<th>Modelo</th>
      			<th>Marca</th>
      			<th>Foto</th>
      			<th>Combustível</th>
      			<th>Valor</th>
      		</tr>
      	</thead>
      	<tbody>
	      	<tr>
	      		<td>123</td>
	      		<td>abc</td>
	      		<td>20.000</td>
	      		<td>123</td>
	      		<td>abc</td>
	      		<td>20.000</td>
	      		<td>20.000</td>
	      	</tr>        
	     </tbody>
      </table>
    )
  }
});

module.exports = List