import React, { Component } from 'react';

export class LocationList extends Component {
  render() {
    return (
      <section className="locations">
        <h2>Location List</h2>
        {
          this.props.locations.map(location =>
            <div key={location.id}>
              <h3>{location.name}</h3>
              <p>{location.address}</p>
            </div>
          )
        }
      </section>
    )
  }
}