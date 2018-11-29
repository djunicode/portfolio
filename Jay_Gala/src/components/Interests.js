import React, { Component } from 'react'
import { Consumer } from '../Context';

class Interests extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { interests } = value;
                    let interestList = interests[0];
                    for(var i=1; i<interests.length; i++) {
                        interestList += `, ${interests[i]}`;
                    }
                    return (
                        <div className="row">
                            <div className="col-md-4 col-sm-12 title">
                                <h4>Interests</h4>
                                <hr className="hr_sub" />
                            </div>
                            <div className="col-md-8 col-sm-12 title_content">
                                { interestList }
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Interests;