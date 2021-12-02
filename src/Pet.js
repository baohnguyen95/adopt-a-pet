import React, { Component } from 'react';

class Pet extends Component {
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
            <td><a href={this.props.url} target="_blank">Find it here!</a></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Pet;