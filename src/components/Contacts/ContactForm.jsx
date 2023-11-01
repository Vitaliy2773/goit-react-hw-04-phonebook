import React, { useState } from 'react';

import css from './Contacts.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          className={css.input}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          className={css.input}
          required
        />
      </label>
      <button type="submit" className={css.buttonAddContact}>
        Add contact
      </button>
    </form>
  );
}
