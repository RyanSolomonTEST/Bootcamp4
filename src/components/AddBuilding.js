import React from 'react';

class AddBuilding extends React.Component{


    constructor(props){
        super(props)
        this.state= {
            code: '',
            name: '',
        }
    }


    handleCodeChange = () => {
        const val = this.codeBox.value
       
        console.log(val)
        this.setState({
            code: val
        })

        

   }

   handleNameChange = () => {
        const val = this.nameBox.value
       
        console.log(val)
        this.setState({
            name: val
        })

        

   }

  
   
   sendAllData = () => {
       
       this.props.addBuilding(this.state)
   }

    render(){

    

    return (
        <div>
           
            <input type="text" placeholder="enter a code" className = "codeBox" onChange={this.handleCodeChange} ref={(value)=> this.codeBox= value}></input>

            <input type="text" placeholder="enter a building name" className = "nameBox" onChange={this.handleNameChange} ref={(value)=> this.nameBox = value}></input>


            <button onClick={this.sendAllData}>Add Listing</button>

        </div>
        
    );
    }
    /*{"code": "NBM", "name": "New Building Name", "address": "Random Address"}*/

}

export default AddBuilding;
       
        

    
	

