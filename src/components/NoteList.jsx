import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, updateNote } from "../redux/slice/notes/notes.jsx"

export default function NotesList() {
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const startEdit = note => {
        setEditId(note.id);
        setEditText(note.text);
    };

    const saveEdit = () => {
        dispatch(updateNote({ id: editId, text: editText }));
        setEditId(null);
        setEditText('');
    };

    return (
        <div className="notes-list">
            {notes.map(note => (
                <div key={note.id} className="note-card">
                    {editId === note.id ? (
                        <>
                            <textarea value={editText} onChange={e => setEditText(e.target.value)} />
                            <button onClick={saveEdit}>Save</button>
                        </>
                    ) : (
                        <>
                            <p>{note.text}</p>
                            <div className="buttons">
                                <button onClick={() => startEdit(note)}>Edit</button>
                                <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
