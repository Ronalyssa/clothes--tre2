import React, { Component } from 'react';


class UpdateTopName extends Component {
    
    editTopName = (topData) => {
        let id = topData.id
        fetch(`http://localhost:3000/tops`, { 
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
              name: topData.name,
        
            })
        })
        .then(resp => resp.json())
        .then(tops => {this.handleTop(tops)
          this.props.history.push("/closet")
        })

    }


    render() {

        return(
            <div>
                
            </div>
        )
    }
}

export default UpdateTopName;