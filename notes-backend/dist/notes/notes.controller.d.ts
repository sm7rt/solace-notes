import { NotesService } from './notes.service';
import { Note } from './note.entity';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    create(createNoteDto: {
        content: string;
    }): Promise<Note>;
    findAll(): Promise<Note[]>;
    findOne(id: string): Promise<Note>;
    update(id: string, updateNoteDto: {
        content: string;
    }): Promise<Note>;
    remove(id: string): Promise<void>;
}
