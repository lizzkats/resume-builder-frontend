import React, { Component } from "react";
import SubmitPDF from './SubmitPDF';
import styled from 'styled-components';
import NameTitle from './NameTitle';
import Website from './Website';
import Contact from './Contact';
import ExperienceUI from './ExperienceUI';
import SkillsUI from './SkillsUI';
import BlurbUI from './BlurbUI';

const Wrapper = styled.section`
    width: 100%;
    display: grid;
    grid-template-rows: 200px auto;
    grid-template-columns: 300px 400px;
    background: white;
  `;

const NameWrapper = styled.section`
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    grid-template-columns: 1fr auto 1fr;
    background: white;
  `;

const ButtonWrapper = styled.section`
    display: grid;
    grid-template-columns: 30% auto;
  `;

export default class ResumeUI extends Component {
  render() {
    return (
      <div>
        <NameWrapper>
          <NameTitle/>
          <Website />
          <Contact />
        </NameWrapper>
        <Wrapper>
          <BlurbUI />
          <ExperienceUI />
          <SkillsUI />
        </Wrapper>
        <ButtonWrapper>
          <SubmitPDF />
        </ButtonWrapper>
      </div>
    );
  }
}
