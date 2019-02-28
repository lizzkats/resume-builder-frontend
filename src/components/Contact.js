import React, {Component} from 'react';
import styled from 'styled-components';

const ContactInput = styled.input`
  border: none;
  font-size: 20px;
  `;
  const H1 = styled.h1`
    color: black;
    font-size: 20px;
  `

export default class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      phone: "555.555.0123",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name] : value
    })
  }

  render(){
    return <div>
              <H1>Say hi</H1>
              <ContactInput
                name="phone"
                type="text"
                value={this.state.phone}
                onChange={this.handleChange}
              />
          </div>
  }
}
