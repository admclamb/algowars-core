import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Account } from './account.entity';
import { ProblemCategory } from './problem-category.entity';

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

  @OneToMany(
    () => ProblemCategory,
    (problemCategory) => problemCategory.problem,
  )
  problemCategories: ProblemCategory[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
