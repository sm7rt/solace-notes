import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import { fetchNotes, createNote, deleteNote } from "./constants/apis";
import { Note } from "./constants/types";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadNotes = async () => {
      const fetchedNotes = await fetchNotes();
      setNotes(fetchedNotes);
    };
    loadNotes();
  }, []);

  const handleAddNote = async (content: string) => {
    const newNote = await createNote(content);
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = async (id: number) => {
    await deleteNote(id);
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) =>
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h1" align="center">
        Notes App
      </Typography>
      <SearchBar onSearch={setSearchTerm} />
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={filteredNotes} onDelete={handleDeleteNote} />
    </Container>
  );
};

export default App;
