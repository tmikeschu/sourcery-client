import React, { Component } from 'react';
import '../App.css';

export default class CreateCheckpoint extends Component {
  render() {
    const  keys = Object.keys(this.props.checkpoint)
    const checkpointAttributes = keys.map((attribute, i) =>
      <input type="text"
        key={i}
        value={this.props.checkpoint[attribute]}
        placeholder={attribute}
        onChange={event => this.props.updateCheckpoint(event, attribute)}
      />
    )
    return(
      <section className="create-checkpoint">
        <h3>Create a Checkpoint</h3>
        <ul>{checkpointAttributes}</ul>
        <input 
          type="submit"
          value="Create a checkpoint"
          onClick={() => this.props.createCheckpoint(this.props.checkpoint)}
        />
      </section>
    );
  }
}
