import React from 'react';
import css from './Contacts.module.css';

export default function ContactItem({ contact, onDeleteItem }) {
  function handleDelete() {
    onDeleteItem(contact.id);
  }

  return (
    <li className={css.item}>
      {contact.name}: {contact.number}
      <button onClick={handleDelete} className={css.btnDelete}>
        Delete
      </button>
    </li>
  );
}
