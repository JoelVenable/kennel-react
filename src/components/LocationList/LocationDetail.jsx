import React, { Component } from 'react'
import building from "./building.jpg"
import { API } from '../../modules/API';
import "./locationDetail.css"
import { AnimalList } from '../AnimalList/AnimalList';

export class LocationDetail extends Component {

  state = {
    saveDisabled: false,
    animals: []
  }

  componentDidMount() {
    console.log("locationID", this.props.location.id)
    API.animals.fetchWithLocation(this.props.location.id)
      .then(animals => this.setState({ animals }))
      .then(() => console.log("animals", this.state.animals))
  }

  render() {
    return (
      <section className="locationDetail" key={this.props.location.id} >
        <div className="locationDetail-title">
          <h1>
            {this.props.location.name}
          </h1>
        </div>

        <h3>Animals at this location</h3>
        <AnimalList animals={this.state.animals} />


      </section >
    )
  }
}
