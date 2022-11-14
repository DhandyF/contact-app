import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';

class ContactApp extends React.Component {
  constructor({ props }) {
    super(props);

    this.state = {
      contacts: getData()
    }

    this.onDeleteEventListener = this.onDeleteEventListener.bind(this);
  }

  onDeleteEventListener(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }
  
  render() {
    return (
      <div className='contact-app'>
        <h1>Daftar Kontak</h1>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteEventListener} />
      </div>
    )
  }
}

// function ContactApp() {
//   const contacts = getData();

//   return (
//     <div className='contact-app'>
//       <h1>Daftar Kontak</h1>
//       <ContactList contacts={contacts} />
//     </div>
//   );
// }

export default ContactApp;
