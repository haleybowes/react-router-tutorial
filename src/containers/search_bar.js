import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        this.setState({
            term: e.target.value
        })
    }

    onFormSubmit(e) {
        e.preventDefault();

        // go and fetch weather data

        // search the api using the search term
        this.props.fetchWeather(this.state.term)
        this.setState({
            // clear the search input after the user has submitted the form
            term: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input 
                    placeholder='Get a 5 day forcast!'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button type="submit" className="btn-secondary btn">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    // whenever action acreator gets called, bind them with the dispatch to make sure that the actions flow fown into the middleware and then into the reducers, then the rest of the application
    return bindActionCreators({fetchWeather}, dispatch)
}

// mapDispatchToProps always has to be the 2nd argument, null is referring to the fact that the component doesn't need to access state
export default connect(null, mapDispatchToProps)(SearchBar)