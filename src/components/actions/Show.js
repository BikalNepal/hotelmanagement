import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patients: {}
    };
  }

  componentDidMount() {
    axios.get('/api/patients/'+this.props.match.params.id)
      .then(res => {
        this.setState({ patients: res.data });
        console.log(this.state.patients);
      });
  }

  

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.patient.name}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/">Add Patient</Link></h4>
            <dl>
              <dt>Patient Name:</dt>
              <dd>{this.state.patient.name}</dd>
              <dt>Age:</dt>
              <dd>{this.state.patient.age}</dd>
              <dt>Title:</dt>
              <dd>{this.state.patient.title}</dd>
              <dt>Symptoms:</dt>
              <dd>{this.state.patient.symptoms}</dd>
            </dl>
            <Link to={`/edit/${this.state.patient._id}`} class="btn btn-success">Edit</Link>&nbsp;
           </div>
        </div>
      </div>
    );
  }
}

export default Show;
