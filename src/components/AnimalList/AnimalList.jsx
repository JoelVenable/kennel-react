import React, { Component } from 'react';
import { AnimalItem } from './AnimalItem';


export class AnimalList extends Component {




  render() {
    return (
      <section className="animals">
        <h2>Animal List</h2>
        {
          this.props.animals.map(item => {
            return <AnimalItem key={item.id}
              animal={item}
              deleteAnimal={this.props.deleteAnimal}
            />
          })
        }
      </section>
    )
  }
}