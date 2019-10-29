import React from 'react';

    class RemoveBuilding extends React.Component{

        removeBuilding = () => {
            this.props.removeBuilding(this.props.selectedBuilding)
        }

        render(){
            if (this.props.data[this.props.selectedBuilding]){
                return (
                    <div>
                        
                    
                        <button onClick={this.removeBuilding}>Delete Listing</button>
            
                    </div>
                )
            
            }
            else{
                return(
                    <div><button onClick={this.removeBuilding}>Delete Listing</button></div>
                )
            }

          

        }

    }

    export default RemoveBuilding
    
        
    




   
    





       
        

    
	

