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
            <div class="shadow-md p-1 mb-5 bg-danger rounded" overflow='scroll'>
                <div className="card-header text-white" style={{backgroundColor: '#1B1464'}}>
                    {this.state.name}
                </div>
                <div className="card-body text-white" style={{backgroundColor: '#8395a7', lineHeight: '100%', fontFamily: 'Consolas', paddingLeft: '20px'}}>
                    <ol style = {{paddingLeft:'10px'}}>
                    {Data.map((detail, index)=>{

                        var indents = "";
                        for (var i = 0; i < detail.line.length; i++) {
                            if (detail.line[i] == '|')
                            {
                                indents += "    ";
                            }
                        }
                        return (

                        <li> <pre style={{paddingLeft: '20px', color: 'white', scrollBehavior: 'hidden'}}>{indents + detail.line}</pre></li>)})}    

                    </ol>
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