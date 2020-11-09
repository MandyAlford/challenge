import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      userName: '',
      password: ''
    }
  };

  logInUser(){
    fetch ('https://api.recruiting.hyperqube.io/v1/token', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      body: JSON.stringify({
        'username': this.state.userName,
        'password' : this.state.password
      })
      }
    }).then(response => console.log(response.json()))
  };

  handleUserChange = (event)=> {

    this.setState({userName: event.target.value})
  }

  handleUserChange = (event)=> {

    this.setState({password: event.target.value})
  }

  render(){
    return <div>
      <input type='text' placeholder='username' id='userName' value={this.state.value} onChange={this.handleUserChange}></input>
      <input type='text' placeholder='password' id='passWord' value={this.state.value} onChange={this.handlePassWordChange}></input>
      <button type='submit' onClick={()=>this.logInUser()}>Submit</button>
    </div>
  }
}

export default LoginForm;
