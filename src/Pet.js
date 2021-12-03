import React, { Component } from 'react';

class Pet extends Component {
  constructor(props){
    super(props);
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick(){
    fetch('/', {
      method: 'DELETE',
      eaders: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.props.name,
      })
    })
    .then(res => res.json())
  }

  render(){
    return(
      <div>
        <table>
          <tr>
            <td>Name: </td>
            <td>{this.props.name}</td>
          </tr>
          <tr>
            <td>Age: </td>
            <td>{this.props.age}</td>
          </tr>
          <tr>
            <td>Size: </td>
            <td>{this.props.size}</td>
          </tr>
          <tr>
            <td>Species: </td>
            <td>{this.props.species}</td>
          </tr>
          <tr>
            <td>Link: </td>
            <td><a href={this.props.url} target="_blank" >Click me!</a></td>
          </tr>
        </table>
        <button type="button" id="delete" onClick={this._onButtonClick}>Oh No My Pet</button>
      </div>
    )
  }
}

export default Pet;