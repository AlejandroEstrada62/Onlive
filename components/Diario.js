import React, { useState } from 'react';

const AddNote = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [noteDate, setNoteDate] = useState('');

  const handleAddNote = () => {
    if (!noteText || !noteDate) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const newNote = {
      id: Date.now(),
      text: noteText,
      date: new Date(noteDate),
    };

    setNotes([...notes, newNote]);
    setNoteText('');
    setNoteDate('');
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="mb-4">
      <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Diary
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          Record of your day to day, as a warrior of this battle.
          </p>
        </div>
        <label htmlFor="noteDate" className="block text-sm font-medium text-black">
          Date
        </label>
        <input
          type="date"
          id="noteDate"
          value={noteDate}
          onChange={(e) => setNoteDate(e.target.value)}
          className="mt-1 block w-full p-2 border text-black border-gray-300 rounded shadow-sm focus:ring-black focus:border-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="noteText" className="block text-sm font-medium text-black">
          Note
        </label>
        <textarea
          id="noteText"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          rows={3}
          placeholder="Escribe tu nota aquí..."
          className="mt-1 block w-full p-2 border text-black border-black rounded shadow-sm focus:ring-black focus:border-black"
        />
      </div>
      <button
        onClick={handleAddNote}
        className="bg-black text-white py-2 px-4 rounded shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        Done
      </button>

      {/* notas enlistadas en pantalla */}
      <div className="mt-6 space-y-4">
        {notes.map((note) => (
          <div key={note.id} className="bg-stone-700 p-4 rounded shadow">
            <h3 className="text-lg font-bold">{note.date.toLocaleDateString()}</h3>
            <p className="text-sm">{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddNote;
