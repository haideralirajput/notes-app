export const getNotes = async () => {
    const response = await fetch('http://localhost:8000/notes', {
        credentials: 'include' // This will include credentials if needed
    });
    if (!response.ok) throw new Error('Failed to fetch notes');
    return await response.json();
};
export const createNote = async (note) => {
    const response = await fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    });
    if (!response.ok) throw new Error('Failed to create note');
    return await response.json();
};
export const updateNote = async (id, note) => {
    const response = await fetch(`http://localhost:8000/notes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    });
    if (!response.ok) throw new Error('Failed to update note');
    return await response.json();
};
export const deleteNote = async (id) => {
    const response = await fetch(`http://localhost:8000/notes/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete note');
    return await response.json();
};
export const logout = async () => {
    const response = await fetch('http://localhost:8000/logout', {
        method: 'POST',
        credentials: 'include'
    });
    if (!response.ok) throw new Error('Logout failed');
    return await response.json();
};
