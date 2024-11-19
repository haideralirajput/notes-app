import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { deleteNote } from './api';

const App = () => {
    const [selectedNote, setSelectedNote] = useState(null);

    const handleEdit = (note) => {
        setSelectedNote(note);
    };

    const handleDelete = async (id) => {
        await deleteNote(id);
        setSelectedNote(null);
    };

    const handleFormSubmit = () => {
        setSelectedNote(null);
    };

    return (
        <div className="app-container">
            <h1>My Notes</h1>
            <NoteForm selectedNote={selectedNote} onFormSubmit={handleFormSubmit} />
            <NoteList onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default App;
