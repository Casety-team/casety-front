import React from "react";
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({value: event.target.value});  
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(event)
  }

  render(){
    return (
        <h1>Signup</h1>
    );
  }
}