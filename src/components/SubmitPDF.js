import React from "react";
import styled from 'styled-components';

const Button = styled.button`
  color: lightblue;
  font-size: 1em;
  border: 2px solid lightblue;
  border-radius: 3px;
  padding: 10px;
`;

export default class SubmitPDF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props}
      this.createPDF = this.createPDF.bind(this);
  }

  async createPDF(){
    await fetch('http://resumetemplatebuilder-backend.herokuapp.com/generatePDF', {
      method: 'POST',
      mode: "cors",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({name: this.props.name, title: this.props.title, website: this.props.website, phone: this.props.phone})
    }).then(response => {console.log(response.text())})
  }

  render() {
    return (
      <div>
        <Button onClick={this.createPDF}>Create PDF</Button>
      </div>
    );
  }
}
