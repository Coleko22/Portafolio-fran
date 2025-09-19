import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, Save, X, StickyNote } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [editNote, setEditNote] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://backend-api-notas-1.onrender.com/api/notes';

  // Cargar notas al iniciar (opcional, si tu API soporta GET)
  useEffect(() => {
    // Comentado porque no sabemos si tu API soporta GET para obtener todas las notas
    // fetchNotes();
  }, []);

  const addNote = async () => {
    if (!newNote.title.trim() || !newNote.content.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newNote.title.trim(),
          content: newNote.content.trim()
        })
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = await response.json();

      setNotes(prev => [...prev, result]);
      setNewNote({ title: '', content: '' });
      setShowAddForm(false);
      
      // Mostrar notificación de éxito
      showNotification('¡Nota guardada con éxito! ✅', 'success');
    } catch (error) {
      console.error('Error al guardar la nota:', error);
      showNotification('Error al guardar la nota ❌', 'error');
    } finally {
      setLoading(false);
    }
  };

  const updateNote = async (id: string) => {
    if (!editNote.title.trim() || !editNote.content.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editNote.title.trim(),
          content: editNote.content.trim()
        })
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setNotes(prev => prev.map(note => 
        note.id === id 
          ? { ...note, title: editNote.title, content: editNote.content }
          : note
      ));
      
      setEditingNote(null);
      showNotification('¡Nota actualizada con éxito! ✅', 'success');
    } catch (error) {
      console.error('Error al editar la nota:', error);
      showNotification('Error al editar la nota ❌', 'error');
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar esta nota?')) return;

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setNotes(prev => prev.filter(note => note.id !== id));
      showNotification('Nota eliminada correctamente', 'success');
    } catch (error) {
      console.error('Error al borrar nota:', error);
      showNotification('Error al eliminar la nota ❌', 'error');
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (note: Note) => {
    setEditingNote(note.id);
    setEditNote({ title: note.title, content: note.content });
  };

  const cancelEdit = () => {
    setEditingNote(null);
    setEditNote({ title: '', content: '' });
  };

  const showNotification = (message: string, type: 'success' | 'error') => {
    // Simple alert por ahora, se podría mejorar con un sistema de notificaciones
    alert(message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-center space-x-3">
            <StickyNote className="h-8 w-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
              Mis Notas
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Add Note Button */}
        {!showAddForm && (
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowAddForm(true)}
              disabled={loading}
              className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-3 disabled:opacity-50"
            >
              <Plus className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
              <span>Nueva Nota</span>
            </button>
          </div>
        )}

        {/* Add Note Form */}
        {showAddForm && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8 transform transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Crear Nueva Nota</h2>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setNewNote({ title: '', content: '' });
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título
                </label>
                <input
                  type="text"
                  value={newNote.title}
                  onChange={(e) => setNewNote(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Escribe el título de tu nota..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contenido
                </label>
                <textarea
                  value={newNote.content}
                  onChange={(e) => setNewNote(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Escribe el contenido de tu nota..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 resize-none"
                />
              </div>
              
              <button
                onClick={addNote}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <Save className="h-5 w-5" />
                <span>{loading ? 'Guardando...' : 'Guardar Nota'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Notes Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {editingNote === note.id ? (
                // Edit Mode
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editNote.title}
                    onChange={(e) => setEditNote(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full text-xl font-bold border-b-2 border-gray-300 focus:border-indigo-500 pb-2 bg-transparent outline-none"
                  />
                  <textarea
                    value={editNote.content}
                    onChange={(e) => setEditNote(prev => ({ ...prev, content: e.target.value }))}
                    rows={4}
                    className="w-full text-gray-700 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 resize-none"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={() => updateNote(note.id)}
                      disabled={loading}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-1 disabled:opacity-50"
                    >
                      <Save className="h-4 w-4" />
                      <span>Guardar</span>
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-1"
                    >
                      <X className="h-4 w-4" />
                      <span>Cancelar</span>
                    </button>
                  </div>
                </div>
              ) : (
                // View Mode
                <>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                      {note.title}
                    </h3>
                    <hr className="border-gray-200" />
                  </div>
                  
                  <p className="text-gray-700 mb-6 line-clamp-4 leading-relaxed">
                    {note.content}
                  </p>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => startEdit(note)}
                      disabled={loading}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-1 disabled:opacity-50"
                    >
                      <Edit3 className="h-4 w-4" />
                      <span>Editar</span>
                    </button>
                    <button
                      onClick={() => deleteNote(note.id)}
                      disabled={loading}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-1 disabled:opacity-50"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Eliminar</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {notes.length === 0 && !showAddForm && (
          <div className="text-center py-16">
            <StickyNote className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-500 mb-2">
              No tienes notas aún
            </h3>
            <p className="text-gray-400 mb-8">
              Crea tu primera nota para comenzar a organizar tus ideas
            </p>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Crear Primera Nota
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;