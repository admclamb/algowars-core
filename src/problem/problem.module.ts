import { Module } from '@nestjs/common';
import { ProblemController } from './controllers/problem/problem.controller';
import { ProblemService } from './services/problem/problem.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account, Problem } from 'src/database/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Problem, Account])],
  controllers: [ProblemController],
  providers: [ProblemService],
})
export class ProblemModule {}
