import React, { useState } from 'react';
import { createNote, updateNote } from '../api';

const NoteForm = ({ selectedNote, onFormSubmit }) => {
    const [title, setTitle] = useState(selectedNote ? selectedNote.title : '');
    const [content, setContent] = useState(selectedNote ? selectedNote.content : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedNote) {
            await updateNote(selectedNote.id, { title, content });
        } else {
            await createNote({ title, content });
        }
        onFormSubmit();
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            ></textarea>
            <button type="submit" className="button-primary">
                {selectedNote ? 'Update Note' : 'Add Note'}
            </button>
        </form>
    );
};

export default NoteForm;
