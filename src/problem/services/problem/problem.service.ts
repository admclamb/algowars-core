import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Problem } from 'src/database/models';
import { Repository } from 'typeorm';
import { CreateProblemDto } from './dtos/CreateProblem.dto';

@Injectable()
export class ProblemService {
  constructor(
    @InjectRepository(Problem)
    private readonly problemRepository: Repository<Problem>,
  ) {}

  public createProblem(createProblemDto: CreateProblemDto): Promise<Problem> {
    const newProblem = this.problemRepository.create(createProblemDto);
    return this.problemRepository.save(newProblem);
  }

  public findProblemById(id: number): Promise<Problem> {
    return this.problemRepository.findOneBy({
      id,
    });
  }
}
