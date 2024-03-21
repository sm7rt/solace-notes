import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

interface NoteFormProps {
  onAddNote: (content: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onAddNote }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.length >= 20 && content.length <= 300) {
      onAddNote(content);
      setContent("");
    } else {
      alert("Note content must be between 20 and 300 characters.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Note Content"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Note
        </Button>
      </Box>
    </form>
  );
};

export default NoteForm;
