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
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Update Patient
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Patient List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="name">Patient Name:</label>
                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Patient's Name" />
              </div>
              <div className="form-group">
                <label for="age">Age:</label>
                <input type="text" className="form-control" name="age" value={age} onChange={this.onChange} placeholder="Age" />
              </div>
              <div className="form-group">
                <label for="title">Title:</label>
                <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label for="symptoms">Symptoms:</label>
                <textArea className="form-control" name="symptoms" onChange={this.onChange} placeholder="Symptoms" cols="80" rows="3">{symptoms}</textArea>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Update;