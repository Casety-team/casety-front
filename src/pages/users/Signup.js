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
      roles: ["user"],
      success: ''
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

    if(firstname){
      if(lastname){
        if(email){
          if(password){
            if(roles){
              axios.post('http://localhost:4545/api/auth/signup', { firstname, lastname, email, password, roles })
              .then((result) => {
                if(result.status === 200) {
                  this.setState({success: result.data.message, error: '' })
                }
              })
              .catch((result) => {
                this.setState({error: result.response.data.message, success: '' })
              });
            } else {
              this.setState({error: 'Failed! Roles is already in use!', success: '' });
            }
          } else {
            this.setState({error: 'Failed! Password is already in use!', success: '' });
          }
        }else {
          this.setState({error: 'Failed! Email is already in use!', success: '' });
        } 
      }else {
        this.setState({error: 'Failed! Lastname is already in use!', success: '' });
      }
    }else {
      this.setState({error: 'Failed! Firstname is already in use!', success: '' });
    }
  }

  render(){
    const { success, error } = this.state
    return (
      <>
        <h1>Signup</h1>
        {success}
        {error}
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