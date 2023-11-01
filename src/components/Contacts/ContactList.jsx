import React from 'react';
import ContactItem from './ContactItem';
import css from './Contacts.module.css';

export default function ContactList({ contacts, onDeleteItem }) {
  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ul>
  );
}
