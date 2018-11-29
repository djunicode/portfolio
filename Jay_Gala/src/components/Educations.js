import React, { Component } from 'react'
import { Consumer } from '../Context';
import Education from './Education';

class Educations extends Component {
  render() {
    return (
        <Consumer>
            {value => {
                const { educations } = value;
                let educationList = educations.map(education => (
                    <Education key={education.id} education={education} />
                ))
                return (
                    <div className="row">
                        <div className="col-md-4 col-sm-12 title">
                            <h4>Education</h4>
                            <hr className="hr_sub" />
                        </div>
                        <div className="col-md-8 col-sm-12 title_content">
                            { educationList } 
                        </div>
                    </div>
                )
            }}
        </Consumer>
    );
  }
}

export default Educations;