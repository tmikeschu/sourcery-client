import React, { Component } from 'react';
import '../App.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Sourcery</h1>
        <a href="#">Sign in to log a checkpoint</a>
      </header>
    );
  }
}

