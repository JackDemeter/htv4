import React from 'react';

class Code extends React.Component {
    constructor(props) {
		super(props);
        console.log(props);
        this.state = {
            name: props.name,
            statement: '',
        }
        console.log(this.state);
	}
    render() {
        return (
            <div class="card">
                <div class="card-header">
                    {this.state.name}
                </div>
                <div class="card-body">
                    <p> {this.state.statement}</p>
                </div>
            </div>)
    }
    getInfo(id){
        let component = this;
		fetch('http://localhost:3000/', {
			method: 'POST',
			headers: {
      	'Content-Type': 'application/json'
    	},
			body: JSON.stringify({
				'id': id
			})
		})
		.then(response => response.json())
        .then(json => component.setState({
            title: json.title,
            time: json.readyInMinutes,
            image: json.image,
            score: json.spoonacularScore,
            vegan: json.vegan,
            vegetarian: json.vegetarian,
        }));
    
    }
}

export default Code;