import React, { Component } from 'react';
import { Consumer } from '../Context';
import Contact from './Contact';

class Contacts extends Component {
  render() {
    return (
        <Consumer>
            {value => {
                const { name, profession, photo, contacts } = value;
                let contactList = contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))
                return (
                    <React.Fragment>
                        <div className="row text-center">
                            <div className="col-md-4 col-sm-12 offset-md-2">
                                <img src={photo} alt='profile_pic' style={{ border: '10px' }} />
                            </div>
                            <div className="col-md-4 col-sm-12 col align-self-center title">
                                <h2>{name}</h2>
                                <h4>{profession}</h4>
                            </div>
                        </div>
                        <hr className="hr_main" />
                        <div className="row">
                            { contactList }
                        </div>
                    </React.Fragment>
                );
            }}
        </Consumer>
    );
  }
}

export default Contacts;
