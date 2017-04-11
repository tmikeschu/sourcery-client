import React, { Component } from 'react';
import '../App.css';

export default class CreateCheckpoint extends Component {
  // checkEnter(event) {
  //   if (event.key !== 'Enter') { return; }
  //   this.props.sendCreatCheckpoint();
  // }

  render() {
    const  keys = Object.keys(this.props.checkpoint)
    const checkpointAttributes = keys.map((attribute) =>
      <input type="text"
          value={this.props.checkpoint[attribute]}
          placeholder={attribute}
          onChange={event => this.props.updateCheckpoint(event, attribute)}
        />
    )
    return(
      <section className="create-checkpoint">
        <h3>Create a Checkpoint</h3>
        <ul>{checkpointAttributes}</ul>
        <input type="submit"
          value="Create a checkpoint"
          onClick={() => this.props.createCheckpoint()}
        />
      </section>
    );
  }
}