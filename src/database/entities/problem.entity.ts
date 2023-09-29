import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Account } from './account.entity';

@Entity()
export class Problem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account)
  createdBy: Account;

  @Column({
    nullable: false,
    type: 'varchar',
  })
  title: string;

  @Column({
    nullable: false,
    type: 'text',
  })
  question: string;

  @Column({
    nullable: false,
    default: 0,
    type: 'int',
  })
  likes: number;

  @Column({
    nullable: false,
    default: 0,
    type: 'int',
  })
  dislikes: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
