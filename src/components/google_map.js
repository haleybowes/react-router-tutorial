import React, { Component } from 'react';

class GoogleMap extends Component {
    
        componentDidMount() {
            // makes reference to the html element this.refs.map and embeds a map into it
            new google.maps.Map(this.refs.map, {
                zoom: 12,
                center: {
                    lat: this.props.lat,
                    lng: this.props.lon
                }
            })
        };

    render() {
        // ref=a prop -> makes use of the ref system which allows us to get a reference to an html element that has been rendered to the page 
        // refer to it using this.refs.map anywhere else in the component
        return <div ref='map'/>;
    }
}

export default GoogleMap;