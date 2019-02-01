import React, {Component} from 'react';
import styled from 'styled-components';

const ChildWrapper = styled.section`
  display: block;
  background: white;
  `;
  const Skills = styled.ul`
  border: none;
  `
  const SkillItem = styled.li`
  border: none;
  list-style: none;
  font-size: 1em;
  `
  const H1 = styled.h1`
    color: black;
    font-size: 1em;
  `

export default class SkillsUI extends Component {
  constructor(props){
    super(props)
    this.state = {
      skills: ["Javascript", "React.js", "HTML", "Node.js", "CSS", "Angular.js", "SCSS", "Bootstrap", "AEM", "Git"]
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
    return <ChildWrapper>
      <Skills>
      <H1>Tech Skills</H1>
      {this.state.skills.map(item =>(
        <SkillItem key={item}>{item}</SkillItem>
      ))}
      </Skills>
      </ChildWrapper>
  }
}
