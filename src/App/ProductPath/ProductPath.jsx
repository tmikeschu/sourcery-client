import React, { Component } from 'react';
import Location from './Location/Location';
import '../App.css';

export default class ProductPath extends Component {
  render() {
    const locations = this.props.good.locations.map((l, i)=> {
      return (<Location 
        key={i} 
        lat={l.lat} 
        lng={l.lng} 
        name={l.name} 
        type={l.type} />  
      );
    }); 

    return (
      <article className='product-path'>
        <section className='start'>
          <p>Start</p>
        </section>
        { locations }
        <section className='finish'>
          <p>Finish</p>
        </section>
      </article>
    );
  }
}
