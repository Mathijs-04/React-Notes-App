import { useEffect, useState } from "react";
import { Link } from "react-router";

function Notes() {
    const [notes, setNotes] = useState([]);

    async function fetchNotes() {
        try {
            const response = await fetch('https://notes.basboot.nl/notes', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            setNotes(data.items);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold text-gray-200 mb-6">Notes</h1>
            <div className="space-y-4">
                {notes && notes.length > 0 ? (
                    notes.map((note) => (
                        <div
                            key={note.id}
                            className="bg-gray-800 p-4 rounded-lg shadow-md"
                        >
                            <Link to={`/notes/${note.id}`} className="text-2xl font-bold text-blue-400">
                                {note.title}
                            </Link>
                            <p className="text-gray-300">{note.body}</p>
                            <p className="text-gray-400">Author: {note.author}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No Notes</p>
                )}
            </div>
        </>
    )
}

export default Notes;
