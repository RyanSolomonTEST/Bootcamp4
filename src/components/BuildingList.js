import React from 'react';

export default ({data, addListing, filterText}) => {

		console.log('current data', data)


		const listingList = data.filter(name => {
			return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
		})
		.map(directory => {
			return (
				<tr key={directory.id}>
					<td onClick={() => addListing(directory.id)}> {directory.code}</td>
					<td onClick={() => addListing(directory.id)}> {directory.name} </td>
				
				</tr>
			);
		});


		return <div>{listingList}</div>;
	
}





