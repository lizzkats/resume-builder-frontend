import React, {Component} from 'react';
import styled from 'styled-components';

const NameInput = styled.input`
  border: none;
  font-size: 20px;
  `;

const Title = styled.input`
  border: none;
  font-size: 30px;
  `;

  export default class NameTitle extends Component {
    constructor(props){
      super(props)
      this.state = {
        name: "Humuhumu Fish",
        title: "Web Designer"
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
      <NameInput
        name="name"
        type="text"
        value={this.state.name}
        onChange={this.handleChange}
      />
      <Title
        name="title"
        type="text"
        value={this.state.title}
        onChange={this.handleChange}
        />
    </div>
    }
  }
