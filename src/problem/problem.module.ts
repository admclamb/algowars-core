import { Module } from '@nestjs/common';
import { ProblemController } from './controllers/problem/problem.controller';
import { ProblemService } from './services/problem/problem.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Problem } from 'src/database/models';

@Module({
  imports: [TypeOrmModule.forFeature([Problem])],
  controllers: [ProblemController],
  providers: [ProblemService],
})
export class ProblemModule {}
