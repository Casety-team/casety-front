import React from "react";
import axios from "axios";
export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({ [event.target.name]: event.target.value }); 
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    axios.post('https://api.casety.fr/api/auth/signin', { email, password })
      .then((result) => {
        console.log(result);
      })
  }

  render(){
    return (
      <>
        <h1>Signin</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Envoyer"/>
        </form>
      </>
    );
  }
}