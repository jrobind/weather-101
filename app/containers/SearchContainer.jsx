import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import getWeather from '../utils/api';
import storage from '../utils/storage';
import Search from '../components/Search';

class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }
    
    handleInput(e) {
        const val = e.target.value;
        this.setState(() => ({search: val}));
    }
    
    handleSubmission() {
        const { search } = this.state;
        const { setStorage } = storage;
        
        getWeather(search)
            .then((data) => setStorage(data));
    }
    
    render() {
        return <Search 
                    handleInput={this.handleInput}
                    handleSubmission={this.handleSubmission}
                />
    }
}

export default SearchContainer;