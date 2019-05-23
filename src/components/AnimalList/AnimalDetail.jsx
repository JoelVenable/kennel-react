import React, { Component } from 'react'
import dog from "./DogIcon.svg"
import "./animals.css";
import { API } from '../../modules/API';

export class AnimalDetail extends Component {

  state = {
    saveDisabled: false,
    animalOwners: [],
    animalCaretakers: [],
    location: {}
  }

  getDogImage() {
    return `https://loremflickr.com/320/240/dog?random=${this.props.animal.id}`
  }

  async componentDidMount() {
    console.log(this.props.animal)
    let newObj = {
      location: await API.locations.fetch(`/${this.props.animal.locationId}`),
      animalOwners: await API.animalOwners.fetchOwnerFromAnimalId(this.props.animal.id)
    }
    console.log(newObj)
    this.setState(newObj);
  }


  render() {
    return (
      <section className="animalDetail">
        <div className="animalDetail-imageContainer">
          <img src={this.getDogImage()} />
        </div>
        <div key={this.props.animal.id} className="card">
          <div className="card-body">
            <div className="card-title">
              <h4>
                {this.props.animal.name}
              </h4>
            </div>
            <p>{this.props.animal.breed}</p>
            <p>Location: {this.state.location.name}</p>
            <ul>
              {this.props.owners.map(owner => {
                console.log(owner);
                return <li key={owner.animalOwnerId}>{owner.first_name} {owner.last_name}, {owner.email}</li>
              })}
            </ul>
          </div>


          <div className="card-buttonContainer">
            <button disabled={this.state.isDeleteButtonDisabled} onClick={this.handleClick}>Delete this animal</button>
          </div>
        </div>
      </section>
    )
  }
}
