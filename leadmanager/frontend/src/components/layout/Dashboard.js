import React, { Component } from 'react'

import Form from '../leads/Form';
import Leads from '../leads/Leads';
import Jobs from '../jobs/Jobs';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* <Form />
        <Leads /> */}
        <Jobs />
      </div>
    )
  }
}
