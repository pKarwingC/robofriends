import React, { Component } from "react";
import CardList from "./CardList"
import SearchBox from "./SearchBox";

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(responses => responses.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter((robot)=> {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox searchchange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App