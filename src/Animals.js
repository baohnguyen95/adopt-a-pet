import React, { Component } from 'react';
import Pet from './Pet.js';

class Animals extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: '',
      size: '',
      species: '',
      url: '',
      showComponent: false,
    }
    this._onButtonClick = this._onButtonClick.bind(this);
  };

  componentDidMount(){
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
      console.log(data.animals[0]);
      this.updateData = data;
      // const button = document.querySelector('#button');
      // button.onclick = () => {
      //   console.log("i've been clicked");
      //   fetch('/', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(data.animals),
      //   })
      //   .then(res => res.json())
      //   .then(data => {
      //     this.setState({
      //       name: data.name,
      //       age: data.age,
      //       size: data.size,
      //       species: data.species,
      //       url: data.url
      //     })
      //   })
      // }

    }).catch(e => {
      //log any errors
      console.log('something went wrong', e);
    });
  }

  _onButtonClick(){
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.updateData.animals[Math.floor(Math.random(0,this.updateData.animals.length))]),
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        name: data.name,
        age: data.age,
        size: data.size,
        species: data.species,
        url: data.url,
        showComponent: true,
      })
    })
    // this.setState({
    //   showComponent: true,
    // });
  }

  render() {
    return(
      <div>
        <button type="button" id="button" onClick={this._onButtonClick}>Add Pet</button>
        {this.state.showComponent ?
          <Pet 
          name={this.state.name} 
          age={this.state.age} 
          size={this.state.size}
          species={this.state.species}
          url={this.state.url}/> : null
        }
      </div>
    );
  };
}

export default Animals;