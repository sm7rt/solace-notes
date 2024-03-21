import { Repository } from 'typeorm';
import { Note } from './note.entity';
export declare class NotesService {
    private notesRepository;
    constructor(notesRepository: Repository<Note>);
    findAll(): Promise<Note[]>;
    findOne(id: string): Promise<Note>;
    remove(id: string): Promise<void>;
    create(content: string): Promise<Note>;
    update(id: string, content: string): Promise<Note>;
}
