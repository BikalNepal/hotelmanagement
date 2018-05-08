import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: {}
    };
  }

  componentDidMount() {
    axios.get('/api/patient/'+this.props.match.params.id)
      .then(res => {
        this.setState({ patient: res.data });
        console.log(this.state.patient);
      });
  }

  onChange = (e) => {
    const state = this.state.patient
    state[e.target.name] = e.target.value;
    this.setState({patient:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, age, title, symptoms} = this.state.post;

    axios.put('/api/patient/'+this.props.match.params.id, { name, age, title, symptoms })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT PATIENT
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.post._id}`}>Patient List</Link></h4>
            
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Patient Name:</label>
                <input type="text" class="form-control" name="author" value={this.state.post.name} onChange={this.onChange} placeholder="Patient Name" />
              </div>
              <div class="form-group">
                <label for="age">Age:</label>
                <input type="text" class="form-control" name="age" value={this.state.post.age} onChange={this.onChange} placeholder="Age" />
              </div>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.post.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="symptoms">Symptoms:</label>
                <input type="text" class="form-control" name="symptoms" value={this.state.post.symptoms} onChange={this.onChange} placeholder="Symptoms" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
