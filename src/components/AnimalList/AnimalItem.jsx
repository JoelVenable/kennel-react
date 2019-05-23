import React, { Component } from "react";
import dog from "./DogIcon.svg";
import { Link } from "react-router-dom";

export class AnimalItem extends Component {
  state = {
    isDeleteButtonDisabled: false,
  }


  getDogImage() {
    return `https://loremflickr.com/320/240/dog?random=${this.props.animal.id}`
  }


  handleClick = (event) => {
    this.setState({ isButtonDisabled: true });
    this.props.deleteAnimal(this.props.animal.id)
  }


  render() {
    return (
      <article key={this.props.animal.id} className="card card-list">
        <div className="card-body">
          <div className="card-image">
            <img src={this.getDogImage()} className="icon-dog" />
          </div>

          <div className="card-title">
            <h4>{this.props.animal.name}</h4>
          </div>
          <p>{this.props.animal.breed}</p>
          <div className="card-buttonContainer">

            <button disabled={this.state.isDeleteButtonDisabled} onClick={this.handleClick}>Delete this animal</button>
            <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
          </div>
        </div>
      </article>
    )
  }
}


