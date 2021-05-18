import React, { useState } from 'react';
  

    class DeleteItems extends React.Component{

        // Javascript function deleteItem is invoked when the user confirms a delete action  
        deleteItem=(e)=>{
            // Write the code for you delete operation here
            alert("Deleted") 
            
        }
        render(){
            return(
            <div>
              {/* onclick event a confirm window pops upto ask the user for confirmation If the user confirms it then function deleteItem is called */}
                  <button onClick={ (e)=>{if(window.confirm("Are you sure you want to delete this?"))this.deleteItem(e)}}> Delete This</button>

            </div>)
        }
    }

    export default DeleteItems;