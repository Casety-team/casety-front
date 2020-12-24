import React from "react";
import axios from "axios";
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      roles: ["user"]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({ [event.target.name]: event.target.value }); 
  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstname, lastname, email, password, roles } = this.state;
    axios.post('https://api.casety.fr/api/auth/signup', { firstname, lastname, email, password, roles })
      .then((result) => {
        console.log(result);
      })
  }

  render(){
    return (
      <>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Firstname:
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
          </label>
          <label>
            Lastname:
            <input type="text" name="lastname"value={this.state.lastname} onChange={this.handleChange} />
          </label>
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