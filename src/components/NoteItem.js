import React from 'react';

const NoteItem = ({ note, onDelete, onEdit }) => {
    return (
        <div className="note-card">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div className="note-actions">
                <button onClick={() => onEdit(note)} className="button-primary">Edit</button>
                <button onClick={() => onDelete(note.id)} className="button-secondary">Delete</button>
            </div>
        </div>
    );
};

export default NoteItem;
