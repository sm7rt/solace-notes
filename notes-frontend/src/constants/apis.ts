import axios from "axios";
import { Note } from "./types";

const API_BASE_URL = "http://localhost:5000/notes"; // Adjust according to your backend URL

export const fetchNotes = async (): Promise<Note[]> => {
  try {
    const response = await axios.get<Note[]>(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error("Could not fetch notes");
  }
};

export const createNote = async (content: string): Promise<Note> => {
  try {
    const response = await axios.post<Note>(API_BASE_URL, { content });
    return response.data;
  } catch (error) {
    throw new Error("Could not create note");
  }
};

export const updateNote = async (
  id: number,
  content: string
): Promise<Note> => {
  try {
    const response = await axios.put<Note>(`${API_BASE_URL}/${id}`, {
      content,
    });
    return response.data;
  } catch (error) {
    throw new Error("Could not update note");
  }
};

export const deleteNote = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    throw new Error("Could not delete note");
  }
};
