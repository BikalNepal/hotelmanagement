import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Update extends Component {

  constructor() {
    super();
    this.state = {
	    id:window.updateid,
      name: window.updatename,
      age: window.updateage,
      title: window.updatetitle,
      symptoms: window.updatesymptoms
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
	
    const { id,name,age, title, symptoms } = this.state;

    axios.put('/api/post/'+id, { name, age, title, symptoms})
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
              Update Patient
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Patient List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Patient Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Patient's Name" />
              </div>
              <div class="form-group">
                <label for="age">Age:</label>
                <input type="text" class="form-control" name="age" value={age} onChange={this.onChange} placeholder="Age" />
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

export default Update;