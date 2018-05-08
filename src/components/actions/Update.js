import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';

class Update extends Component {

  constructor() {
    super();
	  this.state = {
		open: false
	};
  }
  
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  
  	onClick(e){
    }
  onSubmit = (e) => {
    e.preventDefault();

    const { name, age, title, symptoms } = this.state;

    axios.put('/api/post/'+this.props.expense._id, { name, age, title, symptoms })
      .then((result) => {
      });
	this.setState({ open: false });
  }

 
  onOpenModal = () => {
    this.setState({ open: true });
		axios.get('/api/post/'+ this.props.expense._id)
		.then(response => {
		  this.setState({ name: response.data.name });
		  this.setState({ age: response.data.age });
		  this.setState({ title: response.data.title });
		  this.setState({ symptoms: response.data.symptoms });
		})
		.catch(function (error) {
		  console.log(error);
		})
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
	const {open,name,age,title,symptoms} = this.state;
    return (
      <div>
        <button class="btn btn-warning" onClick={this.onOpenModal}>Update</button>
        <Modal open={open} onClose={this.onCloseModal} center>
		
			<div class="container">
			<div class="panel panel-default">
			  <div class="panel-heading">
				<h3 class="panel-title">
				  Update Patient
				</h3>
			  </div>
			  <div class="panel-body">
				<form onSubmit={this.onSubmit}>
				  <div class="form-group">
					<label for="name">Patient Name:</label>
					<input type="text" class="form-control" name="name" value={author} onChange={this.onChange} placeholder="Patient's Name" />
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
		  
        </Modal>
      </div>
    );
  }
}
export default Update;
