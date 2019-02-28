import React, {Component} from 'react';
import styled from 'styled-components';

const WebsiteInput = styled.input`
  border: none;
  font-size: 20px;
  `;
  const H1 = styled.h1`
    color: black;
    font-size: 20px;
  `

export default class Website extends Component {
  constructor(props){
    super(props)
    this.state = {
      website: "sheila.com",
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
              <H1>See my work </H1>
              <WebsiteInput
                name="website"
                type="text"
                value={this.state.website}
                onChange={this.handleChange}
              />
          </div>
  }
}
