import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Edit, Delete, Save } from "@mui/icons-material";
import { Note } from "../constants/types";
import { updateNote } from "../constants/apis";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  const [editingContent, setEditingContent] = useState<string>("");
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);

  const handleEditChange = (content: string) => {
    setEditingContent(content);
  };

  const saveNote = async (note: Note) => {
    await updateNote(note.id, editingContent);
    note.content = editingContent;
    setEditingNoteId(null);
    setEditingContent("");
  };

  const handleEdit = (note: Note) => {
    setEditingNoteId(note.id);
    setEditingContent(note.content);
  };

  return (
    <List>
      {notes.map((note) => (
        <ListItem key={note.id}>
          {note.id === editingNoteId ? (
            <>
              <TextField
                label="Note Content"
                variant="outlined"
                multiline
                fullWidth
                rows={3}
                value={editingContent}
                onChange={(e) => handleEditChange(e.target.value)}
              />
              <ListItemIcon>
                <Button startIcon={<Save />} onClick={() => saveNote(note)}>
                  Save
                </Button>
              </ListItemIcon>
            </>
          ) : (
            <>
              <ListItemText primary={note.content} />
              <ListItemIcon>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => handleEdit(note)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onDelete(note.id)}
                >
                  <Delete />
                </IconButton>
              </ListItemIcon>
            </>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default NoteList;
