import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from "../redux/slice/notes/notes.jsx"
import { nanoid } from '@reduxjs/toolkit';

export default function NoteForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        if (!text.trim()) return;
        dispatch(addNote({ id: nanoid(), text }));
        setText('');
    };

    return (
        <form className="note-form" onSubmit={handleSubmit}>
      <textarea
          placeholder="Write a note..."
          value={text}
          onChange={e => setText(e.target.value)}
      ></textarea>
            <button type="submit">Add Note</button>
        </form>
    );
}
