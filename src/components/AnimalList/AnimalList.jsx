import React, { Component } from 'react';
import { AnimalItem } from './AnimalItem';
import "./animals.css";

export class AnimalList extends Component {




  render() {
    return (
      <section className="animals">
        <div className="animals-cardContainer">
          {
            this.props.animals.map(item => {
              return <AnimalItem key={item.id}
                animal={item}
                deleteAnimal={this.props.deleteAnimal}
              />
            })
          }
        </div>
      </section>
    )
  }
}