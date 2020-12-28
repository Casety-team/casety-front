import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      success: '',
      error: '',
      redirect: false
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

    if(email){
      if(password){
          axios.post((process.env.link__api || 'http://localhost:4545') + '/api/auth/signin', { email, password })
          .then((success) => {
            this.setState({ redirect: true })
          })
          .catch ((error) => {
            console.log(error)
          })
        } else {
          this.setState({
            error: 'Failed! Password is already in use!', 
            success: ''
          });
        }
      } else {
        this.setState({
          error: 'Failed! Email is already in use!', 
          success: '' 
        });
      }
  }
  render(){
    const { redirect } = this.state;

    if(redirect){
      return <Redirect to='/profile'/>;
    }
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