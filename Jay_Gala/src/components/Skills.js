import React, { Component } from 'react'
import { Consumer } from '../Context';

class Skills extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { skills } = value;
                    let skillList = skills[0];
                    for(var i=1; i<skills.length; i++) {
                        skillList += `, ${skills[i]}`;
                    }
                    return (
                        <div className="row">
                            <div className="col-md-4 col-sm-12 title">
                                <h4>Skills</h4>
                                <hr className="hr_sub" />
                            </div>
                            <div className="col-md-8 col-sm-12 title_content">
                                { skillList }
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Skills;