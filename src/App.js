import React, { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      animals: []
    }
  };

  componentDidMount() {
    const key = 'IqTXsrsqYEbEU6l5kChtQvfeNSmDlesXCD4QbKfT4UsD0m85HG';
    const secret = 'KYWrSNb7w9YE8H4NmAdDfA6CK4qyO1cP348gC647';
    
    // call the API
    fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {

      // return the response as json
      return res.json();

    }).then(data => {

      // log the API data 
      console.log('token', data);

      // return a second API
      // this one uses the token we received for authentication
      return fetch('https://api.petfinder.com/v2/animals', {
        headers: {
          'Authorization': data.token_type + ' ' + data .access_token,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    }).then(res => {
      // return the API response as JSON
      return res.json();
    }).then(data => {
      // log the pet data
      console.log('pets', data);
      this.setState(prevState => ({
        animals: [...prevState.animals, data.animals]
      }));
      console.log(this.state.animals);
    }).catch(e => {
      //log any errors
      console.log('something went wrong', e);
    })
  };

  render() {
    return (
      <div className = "App">
        <h1> Adopt A Pet </h1>
      </div>
    );
  }
}

export default (App);