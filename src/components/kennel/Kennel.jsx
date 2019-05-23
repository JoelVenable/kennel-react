import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "./kennel.css";
import { Navbar } from '../../nav/Nav';
import { ApplicationViews } from '../../ApplicationViews';



export class Kennel extends Component {

  render() {
    return (
      <>
        <Navbar />
        <ApplicationViews />
      </>
    )
  }
}