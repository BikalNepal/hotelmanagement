import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      title: '',
      symptoms: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, age, title, symptoms } = this.state;

    axios.post('/api/post', { name, age, title, symptoms})
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, age, title, symptoms } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD PATIENT
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/">Patient List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Patient Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Patient's Name" />
              </div>
              <div class="form-group">
                <label for="age">Patient Age:</label>
                <input type="text" class="form-control" name="age" value={age} onChange={this.onChange} placeholder="Patient's Age" />
              </div>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="symptoms">Symptoms:</label>
                <textArea class="form-control" name="symptoms" onChange={this.onChange} placeholder="Symptoms" cols="80" rows="3">{symptoms}</textArea>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
      </div>
      </div>
    );
  }
}

export default Create;
