import React from 'react';





class ViewBuilding extends React.Component{
	

	render(){

		if (this.props.data[this.props.selectedBuilding]){
			if ((this.props.data[this.props.selectedBuilding].coordinates)){
		
				
		
				
				return (
			
					<div>
							<table>
								<tr key={this.props.data[this.props.selectedBuilding]}>
									<td>{this.props.data[this.props.selectedBuilding].code}</td>
									<td>{this.props.data[this.props.selectedBuilding].name}</td>
									<td>{this.props.data[this.props.selectedBuilding].address}</td>
									<td>{this.props.data[this.props.selectedBuilding].coordinates.latitude}</td>
									<td>{this.props.data[this.props.selectedBuilding].coordinates.longitude}</td>
		
								</tr>
		
						
								
					
							</table>
		
					</div>
				
				);
			}
		
			return (
		
				<div>
						<table>
							<tr key={this.props.data[this.props.selectedBuilding]}>
								<td>{this.props.data[this.props.selectedBuilding].code}</td>
								<td>{this.props.data[this.props.selectedBuilding].name}</td>
								<td>{this.props.data[this.props.selectedBuilding].address}</td>
							
		
							</tr>
				
						</table>
		
				</div>
			
			);
		
		}
		
		
		
		else{
			return (
		
				<div>
				
				</div>
			);
		}
		

	}

	



}

export default ViewBuilding



