import React, { Component } from 'react';

import Cat from './Cat.jsx';

// App component - represents the whole app
export default class App extends Component {
  getCats() {
    return [
      { _id: 1, text: 'Calendar' },
      { _id: 2, text: 'Waiton' },
      { _id: 3, text: 'Daily' },
    ];
  }

  renderTasks() {
    return this.getCats().map((cat) => (<Cat key={cat._id} cat={cat} />));
  }
  /*
        return this.getTasks().map((task) => (
        <Task key={task._id} task={task} />*/
  render() {
    return (
      <div className="container">
        <header>
          <h1>Choose Category</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
