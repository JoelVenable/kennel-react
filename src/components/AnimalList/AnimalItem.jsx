import React, { Component } from "react";
import { API } from '../../modules/API';


export class AnimalItem extends Component {
  state = {
    owners: []
  }


  componentDidMount() {
    this.getOwners(this.props.animal.id);
  }

  handleClick = (event) => {
    this.props.deleteAnimal(this.props.animal.id)
  }

  getOwners = (animalId) => {
    API.animalOwners.fetchOwnerFromAnimalId(animalId)
      .then(animalOwners => animalOwners.map(animalOwner => animalOwner.owner))
      .then(owners => this.setState({ owners }))
  }

  render() {
    return (
      <article>
        <h4>Name: {this.props.animal.name}</h4>
        <p>Breed: {this.props.animal.breed}</p>
        <p>Owners:</p>
        <ul>
          {this.state.owners.map(owner => <li>{owner.first_name} {owner.last_name}</li>)}
        </ul>
        <button onClick={this.handleClick}>Delete this animal</button>
      </article>
    )
  }
}

