import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  findAll(): Promise<Note[]> {
    return this.notesRepository.find();
  }

  findOne(id: string): Promise<Note> {
    return this.notesRepository.findOneBy({ id: +id });
  }

  async remove(id: string): Promise<void> {
    await this.notesRepository.delete(id);
  }

  async create(content: string): Promise<Note> {
    const note = new Note();
    note.content = content;
    return this.notesRepository.save(note);
  }

  async update(id: string, content: string): Promise<Note> {
    const note = await this.notesRepository.findOneBy({ id: +id });
    note.content = content;
    return this.notesRepository.save(note);
  }
}
