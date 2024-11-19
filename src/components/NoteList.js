import React, { useEffect, useState } from 'react';
import { getNotes } from '../api';
import NoteItem from './NoteItem';

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await getNotes();
            setNotes(response.data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    return (
        <div className="notes-grid">
            {notes.map(note => (
                <NoteItem key={note.id} note={note} />
            ))}
        </div>
    );
};

export default NoteList;
