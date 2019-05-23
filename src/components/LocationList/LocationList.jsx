import React, { Component } from 'react';
import { API } from '../../modules/API';
import building from "./building.jpg";
import "./locations.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export class LocationList extends Component {


  state = {
    locations: []
  }

  componentDidMount() {
    API.locations.fetch().then(locations => this.setState({ locations }))
  }

  render() {
    return (
      <section className="locations">
        <h2>Location List</h2>
        {
          this.state.locations.map(location =>
            <div key={location.id} className="card location-card">
              <div className="location-image">
                <img src={building} />
              </div>
              <div className="location-details">
                <div className="location-detailsInner">

                  <h3>{location.name}</h3>
                  <p>{location.address}</p>
                  <Link to={`./locations/${location.id}`} className="nav-link">Details</Link>
                </div>

              </div>
            </div>
          )
        }
      </section>
    )
  }
}