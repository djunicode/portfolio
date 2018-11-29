import React, { Component } from 'react';
import { Consumer } from '../Context';

class Events extends Component {
  render() {
    return (
        <Consumer>
            {value => {
                const { events } = value;
                let eventList = events.map(event => (
                    <p key={event.id}>{event.title}</p>
                ));
                return (
                    <div className="row">
                        <div className="col-md-4 col-sm-12 title">
                            <h4>Events</h4>
                            <hr className="hr_sub" />
                        </div>
                        <div className="col-md-8 col-sm-12 title_content">
                            { eventList }
                        </div>
                    </div>
                );
            }}
        </Consumer>
    );
  }
}


export default Events
