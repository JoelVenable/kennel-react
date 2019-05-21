import React, { Component } from 'react';

export class AnimalList extends Component {

  getOwnerName = (animalOwnerId) => {
    let owner = this.props.owners.find(owner => owner.id === animalOwnerId)
    console.log(owner);
    return `${owner.first_name} ${owner.last_name}`;
  }



  render() {
    return (
      <section className="animals">
        <h2>Animal List</h2>
        {
          this.props.animals.map(animal =>
            <div key={animal.id}>
              <h4>Name: {animal.name}</h4>
              <p>Breed: {animal.breed}</p>
              <p>Owner: {this.getOwnerName(animal.ownerId)}</p>
            </div>
          )
        }
      </section>
    )
  }
}