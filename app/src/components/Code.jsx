import React from 'react';
import Data from './test.json';

class Code extends React.Component {
    constructor(props) {
		super(props);
        console.log(props);
        this.state = {
            name: props.name,
            statement: '',
        }

        console.log(this.state);
        this.getInfo("temp");
	}
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.state.name}
                </div>
                <div className="card-body">
                    {Data.map((detail)=>{
                        var indents = "";
                        for (var i = 0; i < detail.line; i++) {
                            indents += " "*4;
                        }
                        return (
                        
                        <p>{indents} {detail.line}</p>)})}
                </div>
            </div>)
    }
    getInfo(id){
        let component = this;
		// fetch('http://localhost:3000/', {
		// 	method: 'POST',
		// 	headers: {
      	// 'Content-Type': 'application/json'
    	// },
		// 	body: JSON.stringify({
		// 		'id': id
        // 	})
        // })
		// .then(response => response.json())
        // .then(json => component.setState({
        //     state: json.state,
        // }));

        
    }
}

export default Code;