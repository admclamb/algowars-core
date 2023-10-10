import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Category } from './category.entity';
import { Problem } from './problem.entity';

@Entity()
export class ProblemCategory {
  @PrimaryColumn()
  categoryId: number;

  @PrimaryColumn()
  problemId: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @ManyToOne(() => Problem)
  @JoinColumn({ name: 'problemId' })
  problem: Problem;
}
