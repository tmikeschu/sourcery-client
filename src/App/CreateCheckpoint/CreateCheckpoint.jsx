import React, { Component } from 'react';
import '../App.css';

export default class CreateCheckpoint extends Component {
  render() {
    const  keys = Object.keys(this.props.checkpoint)
    const checkpointAttributes = keys.map((attribute, i) =>
      <input type="text"
        required
        key={i}
        value={this.props.checkpoint[attribute]}
        placeholder={attribute.replace('_', ' ')}
        onChange={event => this.props.updateCheckpoint(event, attribute)}
      />
    )

    return(
      <section className="create-checkpoint">
        <h3 tabIndex="0">Create Checkpoint</h3>
        <form onSubmit={(event) => this.props.createCheckpoint(event) }>
          <ul>{checkpointAttributes}</ul>
          <input type="submit" value="Submit" />
        </form>
        <p style={{display: this.props.newCheckpoint.id !== 0 ? '' : 'none'}}>
          Checkpoint { this.props.newCheckpoint.id } successfully created!
        </p>
      </section>
    );
  }
}
