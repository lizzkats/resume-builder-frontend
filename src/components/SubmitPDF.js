import React from "react";

export default class SubmitPDF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props}
      this.createPDF = this.createPDF.bind(this);
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
      body: JSON.stringify({name: this.props.name, title: this.props.title})
    }).then(response => {console.log(response.text())})
  }

  render() {
    return (
      <div>
        <button onClick={this.createPDF}>Create PDF</button>
      </div>
    );
  }
}
