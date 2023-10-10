import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Problem } from './problem.entity';
import { Language } from './language.entity';

@Entity()
export class ProblemInfoLanguage {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Problem)
  problem: Problem;

  @ManyToOne(() => Language)
  language: Language;

  @Column({
    nullable: false,
    type: 'text',
  })
  baseCode: string;
}
