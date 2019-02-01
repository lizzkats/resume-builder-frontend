import React, { Component } from "react";
import SubmitPDF from './SubmitPDF';
import styled from 'styled-components';
import ContactUI from './ContactUI';
import ExperienceUI from './ExperienceUI';
import SkillsUI from './SkillsUI';
import BlurbUI from './BlurbUI';

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 1em;
    background: white;
  `;
const BlurbAndSkills = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: white;
  `;


export default class ResumeUI extends Component {
  render() {
    return (
      <div>
      <Wrapper>
        <ContactUI />
      </Wrapper>
      <Wrapper>
        <BlurbAndSkills>
        <BlurbUI />
        <SkillsUI />
        </BlurbAndSkills>
        <ExperienceUI />
      </Wrapper>
      <Wrapper>
      <SubmitPDF />
      </Wrapper>
      </div>
    );
  }
}
