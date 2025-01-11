import { useState } from "react";
import {useNavigate} from "react-router";

function CreateNote() {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        author: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    async function createNote() {
        try {
            const response = await fetch('https://notes.basboot.nl/notes', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Successfully created:', data);
                setFormData({ title: '', body: '', author: '' });
                navigate('/notes');
            } else {
                console.error('Error creating note:', response.statusText);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createNote();
    };

    return (
        <>
            <h1 className="text-2xl font-bold text-gray-200">Create Note</h1>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md text-gray-200">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">Create a new note</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium mb-1">
                            Title:
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Title of the note"
                        />
                    </div>
                    <div>
                        <label htmlFor="body" className="block text-sm font-medium mb-1">
                            Description:
                        </label>
                        <textarea
                            id="body"
                            name="body"
                            value={formData.body}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Description of the note"
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="author" className="block text-sm font-medium mb-1">
                            Author:
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Author of the note"
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-gray-900 font-semibold rounded-md hover:bg-blue-600 transition">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default CreateNote;
