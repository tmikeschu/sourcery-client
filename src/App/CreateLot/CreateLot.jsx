import React, { Component } from 'react';
import '../App.css';

export default class CreateLot extends Component {
  render() {
    const products = this.props.products.map(product => {
      return (
        <option key={product.id} value={product.id}>{product.name}</option>
      );
    });
    return(
      <section className="create-lot">
        <h3 tabIndex="0">Create Lot</h3>
        
        <form onSubmit={event => this.props.createLot(event)}>
          <select required 
            name="product_id"
            onChange={event => this.props.updateLot(event, "product_id")} 
          >
            <option value="">--Product--</option>
            { products }
          </select>
          <input type="submit" value="Submit" />
        </form>
        <p style={{display: this.props.newLot.id !== 0 ? '' : 'none'}}>
          Lot successfully created! Lot ID: {this.props.newLot.id}
        </p>
      </section>
    );
  }
}
