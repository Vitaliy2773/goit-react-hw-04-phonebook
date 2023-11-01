import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Contacts/ContactForm';
import Filter from './Contacts/Filter';
import ContactList from './Contacts/ContactList';
import css from '../components/Contacts/Contacts.module.css';
import { loadContacts, saveContacts } from '../local';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const prevContactsRef = useRef();

  function changeFilter(e) {
    setFilter(e.currentTarget.value);
  }

  useEffect(() => {
    const loadedContacts = loadContacts(contacts);
    setContacts(loadedContacts);
  }, []);

  useEffect(() => {
    if (prevContactsRef.current !== contacts) {
      saveContacts(contacts);
    }
    prevContactsRef.current = contacts;
  }, [contacts]);

  function handleSubmit(contactName, contactNumber) {
    const presentContact = contacts.find(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );

    if (presentContact) {
      alert(`${contactName} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  }

  function handleDeleteContact(contactId) {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2 className={css.title}>Contacts</h2>
      <Filter onChange={changeFilter} value={filter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteItem={handleDeleteContact}
      />
    </div>
  );
}
