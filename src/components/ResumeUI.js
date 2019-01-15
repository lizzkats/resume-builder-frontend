import React, { Component } from "react";
import SubmitPDF from './SubmitPDF';
import styled from 'styled-components';
import ContactUI from './ContactUI';
import ExperienceUI from './ExperienceUI';
import SkillsUI from './SkillsUI';
import BlurbUI from './BlurbUI';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1em;
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
        <BlurbUI />
      </Wrapper>
      <Wrapper>
        <ExperienceUI />
      </Wrapper>
      <Wrapper>
        <SkillsUI />
      </Wrapper>
      <SubmitPDF />
      </div>
    );
  }
}
