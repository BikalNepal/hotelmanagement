import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    console.log("It reaches App");
    super(props);
    this.state = {
      patients: []
    };
	this.onUpdate = this.onUpdate.bind(this);
  }
  
  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/patient')
      .then(res => {
        this.setState({ posts: res.data });
      })
      
  }

	onUpdate(e){
		window.updateid= this.state.posts[0]._id;
		window.updateauthor= this.state.posts[0].author;
		window.updatedescription= this.state.posts[0].description;
	}
	
  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Patient Records &nbsp;
            </h3>
          </div>
          
          <div class="panel-body">
              <h4><Link to="/create">Add Patient</Link></h4>
              
              <div className="patients">
                  
                  {this.state.patients.map(patient =>
                    <div className="patient">
                      <div className="name">
            						<div>Patient Name: {patient.name}</div>
            					</div>     
                      
            				  <div className="age">
            						<div>Age: {patient.age}</div>
            					</div>

                      <div className="title">
                        <div>Title: {patient.title}</div>
                      </div>

                      <div className="symptoms">
                        <div>Symptoms: {patient.Symptoms}</div>
                      </div>

            					<div>
            						<div>
            							<button class="btn btn-warning" 
                                  onClick={this.onUpdate}><Link to="/update">Update</Link>
                          </button>
            						</div>
            					</div>
                    </div> 
                   )}

              </div>
              <br />

          </div>       
        </div>
      </div>
    );
  }
}

export default App;
