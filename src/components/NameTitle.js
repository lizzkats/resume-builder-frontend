import React from "react";
import { Provider } from './ContextProvider';

export default class NameTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Lizz",
      title: "Awesome"
      };
      this.handleChange = this.handleChange.bind(this);
      this.createPDF = this.createPDF.bind(this);
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name] : value
    })
  }

  async createPDF(){
    await fetch('http://localhost:3000/generatePDF', {
      method: 'POST',
      mode: "cors",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({name: this.state.name, title: this.state.title})
    }).then(response => {console.log(response.text())})
  }

  render() {
    return (
      <Provider>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <hr />
        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Title"
        />
        <h1>{this.state.name}</h1>
        <h2>{this.state.title}</h2>
        <button onClick={this.createPDF}>Create PDF</button>
      </Provider>
    );
  }
}
