import React, { Component } from "react";
import SubmitPDF from './SubmitPDF';

export default class ResumeUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sheila",
      title: "Web Designer",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name] : value
    })
  }

  render() {
    return (
      <div>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <h1>{this.state.name}</h1>
        <hr />
        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Title"
        />
        <h2>{this.state.title}</h2>
        <SubmitPDF name={this.state.name} title={this.state.title} />
      </div>
    );
  }
}
