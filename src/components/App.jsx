import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import * as SC from './App.styled'


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
}

componentDidMount() {
  const stringifiedContacts = localStorage.getItem('contacts');
  const parsedContacts =
    JSON.parse(stringifiedContacts) ?? this.state.contacts;

  this.setState({ contacts: parsedContacts });
}

componentDidUpdate(_, prevState) {
  if (prevState.contacts !== this.state.contacts) {
    const stringifiedContacts = JSON.stringify(this.state.contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }
}

handleAddContact = data => {
  const isAvailable = this.state.contacts.some(contact => contact.name.toLowerCase() === data.name.toLowerCase());
  if (isAvailable) {
    alert('$(data.name) is already in contacts.')
    return
}

const finalContact = {
  ...data,
  id:nanoid()

}
this.setState(prevState => ({contacts: [...prevState.contacts, finalContact]}))
}
 

getContacts = () => {
  const {contacts, filter} = this.state
const lowerWords = filter.toLowerCase()
return contacts.filter(({name}) => name.toLowerCase().includes(lowerWords)
)}

filterContacts = evt => {
  this.setState({ filter: evt.currentTarget.value });
};

handleDeleteContact = contactId => {
  this.setState(({ contacts }) => ({
    contacts: contacts.filter(({ id }) => id !== contactId),
  }))
}


  render() 
  {
  return (
    <SC.Wrapper>
      <SC.MainTitle>Phonebook</SC.MainTitle>
      <ContactForm handleAddContact={this.handleAddContact} />

      <SC.Title>Contacts</SC.Title>

      {this.state.contacts.length !== 0 ? (
        <>
          <Filter value={this.filter} filterContacts={this.filterContacts} />
          <ContactList
            contacts={this.getContacts()}
            handleDelete={this.handleDeleteContact}
          />
        </>
      ) : (
        <SC.Descr>Phonebook is empty</SC.Descr>
      )}
    </SC.Wrapper>
  );
};
};
