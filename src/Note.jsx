import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

function Note() {
    const params = useParams();
    const id = params.id;
    const [note, setNote] = useState(null);
    const navigate = useNavigate();

    async function fetchNote() {
        try {
            const response = await fetch(`https://notes.basboot.nl/notes/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            setNote(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function deleteNote() {
        try {
            await fetch(`https://notes.basboot.nl/notes/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            });
            navigate('/notes');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        fetchNote();
    }, []);

    function editNavigation() {
        navigate(`/notes/${id}/edit`);
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-gray-200 mb-6">Note: {note?.title}</h1>
            {note ? (
                <div className="space-y-6">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h1 className="text-2xl font-bold text-blue-400 mb-4">{note.title}</h1>
                        <p className="text-gray-300 mb-4">{note.body}</p>
                        <p className="text-gray-400">Author: {note.author}</p>
                        <div className="flex mt-4">
                            <button
                                onClick={editNavigation}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={deleteNote}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-gray-400">No note found</p>
            )}
        </>
    )
}

export default Note;
