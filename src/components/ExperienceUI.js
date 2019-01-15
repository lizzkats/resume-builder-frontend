import React, {Component} from 'react';
import styled from 'styled-components';

const ChildWrapper = styled.section`
  background: white;
  `;
  const ExperienceText = styled.textarea`
      border: none;
      font-size: 1em;
      resize: none;
      border: none;
      overflow: hidden;
      height: 20em;
      width: 25em;
      `;

  const ExperienceTitle = styled.input`
    color: black;
    font-size: 1.5em;
    border: none;
  `
  const ExperienceLocation = styled.input`
    color: black;
    font-size: 0.9em;
    border: none;`

  const Experience = styled.div`
    height: 10em;
    width: 15em;
  `

export default class ExperienceUI extends Component {
  constructor(props){
    super(props)
    this.state = {
      experience: [
        {
        id: 1,
        title :"UX Designer",
        location: "Tempe, AZ",
        description:  "Meltmedia is a software development agency that specializes in solutions for life sciences products Built & maintained 30 sites in Adobe Experience Manager (AEM) Maintained mutiple concurrent projects in staging & production environments Worked with clients to redesign the content of their sites while keeping within the existing dynamic templates Managed documentation of customized AEM components to enable non-technical users to edit content Trained Meltmedia’s email developers how to use AEM versioning to update Important Safety Information, the most crucial legal information on pharmaceutical sites Helped develop company process for utilizing AEM"
        },
        {
        id: 2,
        title:"UI Designer",
        location: "Scottsdale AZ",
        description: "Six Bricks is an educational app to help marketing professionals learn industry software Built additional features to allow users to track other users’ progress Worked from specifications handed off from design to create dynamic features Used Javascript, HTML, & CSS Used Plot.ly, a framework to help graph the user data Helped convert the features in order to make the app faster, more scalable, & reduce redundancy Converted Angular 1 frontend code to React.js The app originally used Java. Built a Node.js API to store user data in a more scalable way Wrote unit tests for the Node.js backend using Jasmine"
        }
      ]
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
    return  <div>
            <ChildWrapper>
            { this.state.experience.map( item => (
            <Experience key={item.id}>
              <ExperienceTitle
              name="title"
              type="text"
              value={item.title}
              onChange={this.handleChange}
              />
              <ExperienceLocation
              name="location"
              type="text"
              value={item.location}
              onChange={this.handleChange}
              />
              <ExperienceText
                name="description"
                type="text"
                value={item.description}
                onChange={this.handleChange}
              />
              </Experience>
            ))
            }
            </ChildWrapper>
            </div>
  }
}
