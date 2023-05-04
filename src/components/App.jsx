import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = data => {
    const isInContacts = this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isInContacts) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...data }, ...prevState.contacts],
    }));
  };

  deleteUser = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contacts => contacts.id !== id),
    }));
  };

  handleChange = ({ target }) => {
    this.setState({ filter: target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const formatFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(formatFilter)
    );
    return (
      <section>
        <div>
          <h1>Phonebook</h1>
          <ContactForm createContact={this.createContact} />
          <h2>Contacts</h2>
          {contacts.length > 0 ? (
            <>
              <ContactFilter handleChange={this.handleChange} value={filter} />
              <Contacts contacts={filterContacts} onDelete={this.deleteUser} />
            </>
          ) : (
            <p>no contacts yet</p>
          )}
        </div>
      </section>
    );
  }
}
