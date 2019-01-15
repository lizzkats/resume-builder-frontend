import React, {Component} from 'react';
import styled from 'styled-components';

const ChildWrapper = styled.section`
  background: white;
  `;
const NameInput = styled.input`
  border: none;
  font-size: 3em;
  `;
const TitleInput = styled.input`
  border: none;
  font-size: 2em;
  `;
const Input = styled.input`
  border: none;
  font-size: 2em;
  `;
  const H1 = styled.h1`
    color: black;
    font-size: 1em;
  `

export default class ContactUI extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "Sheila",
      title: "Web Designer",
      website: "sheila.com",
      phone: "100.555.0123",
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
            <ChildWrapper>
              <NameInput
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <TitleInput
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </ChildWrapper>
            <ChildWrapper>
              <H1>See my work </H1>
              <Input
                name="website"
                type="text"
                value={this.state.website}
                onChange={this.handleChange}
              />
            </ChildWrapper>
            <ChildWrapper>
              <H1>Say hi</H1>
              <Input
                name="phone"
                type="text"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </ChildWrapper>
          </div>
  }
}
