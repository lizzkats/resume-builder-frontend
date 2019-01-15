import React, {Component} from 'react';
import styled from 'styled-components';

const ChildWrapper = styled.section`
  background: white;
  `;
  
const BlurbText = styled.textarea`
    border: none;
    font-size: 1em;
    color: white;
    background: aquamarine;
    resize: none;
    border: none;
    overflow: hidden;
    height: 10em;
    width: 15em;
    `;
const H1 = styled.h1`
    color: black;
    font-size: 1em;
    `;
export default class BlurbUI extends Component {
  constructor(props){
    super(props)
      this.state = {
        blurb: "I’m a self-starting software engineer who loves to get stuff done. I’m seeking opportunities where I can build elegant frontend solutions, learn from others, & create sustainable processes."
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
    return  <ChildWrapper>
              <H1>Hello!</H1>
              <BlurbText
                name="blurb"
                type="text"
                value={this.state.blurb}
                onChange={this.handleChange}
              />
            </ChildWrapper>
  }
}
