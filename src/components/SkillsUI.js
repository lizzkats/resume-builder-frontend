import React, {Component} from 'react';
import styled from 'styled-components';

const ChildWrapper = styled.section`
  background: white;
  `;
  const Skills = styled.ul`
  border: none;
  height: 5em;
  width: 20em;
  `
  const SkillItem = styled.li`
  border: none;
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
    return <div>
      <ChildWrapper>
      <H1>Tech Skills</H1>
      <Skills>
      {this.state.skills.map(item =>(
        <SkillItem key={item}>{item}</SkillItem>
      ))}
      </Skills>
      </ChildWrapper>
          </div>
  }
}
