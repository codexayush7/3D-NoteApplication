import React from 'react';
import NoteForm from './components/NoteForm.jsx';
import NotesList from './components/NoteList.jsx';

export default function App() {
    return (
        <div className="app-container">
            <h1>🗒️ 3D Notes App</h1>
            <NoteForm />
            <NotesList />
        </div>
    );
}