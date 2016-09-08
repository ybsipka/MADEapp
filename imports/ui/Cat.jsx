import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Cat extends Component {
  fnc(){
    alert("HI DEREK!");
  }
  render() {
    return (
      <li>
      <button type="button" className="btn btn-primary" onClick={this.fnc.bind(this)}>{this.props.cat.text}</button>
      </li>
    );
  }
}

Cat.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  cat: PropTypes.object.isRequired,
};
