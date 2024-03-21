import React from "react";
import { TextField } from "@mui/material";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <TextField
      fullWidth
      label="Search Notes"
      variant="outlined"
      margin="normal"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
