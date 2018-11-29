import React, { Component } from 'react';
import uuid from 'uuid';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        name: 'Jay Gala',
        photo: 'https://raw.githubusercontent.com/jaygala24/Frontend-Coding/master/JSON%20file/profile_pic.png',
        profession: 'SE, Computer Engg.',
        contacts: [
            { 
                id: uuid(),
                details: 'jaygala24@gmail.com', 
                icon: 'fas fa-envelope',
                link:  null,  
            },
            { 
                id: uuid(),
                details: 'Github', 
                icon: 'fab fa-github', 
                link: 'https://github.com/jaygala24', 
            },
            { 
                id: uuid(),
                details: 'Linkedin', 
                icon: 'fab fa-linkedin-in', 
                link: 'https://www.linkedin.com/in/jaygala24', 
            },
        ],
        skills: ['C', 'Python', 'Django', 'React', 'HTML', 'CSS', 'Bootstrap', 'Javascript', 'jQuery'],
        events: [
            {
                id: uuid(),
                title: 'Attended Unicode Workshop on Web Development(Python-Django) in Feb,2018',
            },
            {
                id: uuid(),
                title: 'Participated in TSEC Codestorm in Oct,2018'
            }    
        ],
        educations: [
            {
                id: uuid(),
                course: 'BE Computer Engineering',
                institute: 'D. J. Sanghvi College of Engineering',
                location: 'Vileparle',
                start_year: 2017,
                end_year: 2021,
                result: '9.56 CGPA'
            },
            {
                id: uuid(),
                course: 'HSC',
                institute: 'Shri T. P. Bhatia Junior College of Science',
                location: 'Kandivali',
                start_year: 2015,
                end_year: 2017,
                result: '91.38 %'
            },
            {
                id: uuid(),
                course: 'SSC',
                institute: 'K. M. P. D. Vidyalay',
                location: 'Nalasopara',
                start_year: 2014,
                end_year: 2015,
                result: '95.40 %'
            }
        ],
        interests: ['Coding', 'Cricket', 'Adventure']
    }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;

