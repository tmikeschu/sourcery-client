import React, { Component } from 'react';
import '../App.css';

export default class createLot extends Component {
  render() {
    return(
      <section className="create-lot">
        <input type="text"
          value={this.props.lot}
          placeholder="Enter your lots name"
        />
        <input type="submit"
          value="Create a Lot"
          onClick={() => this.props.createLott()}
        />
      </section>
    );
  }
}