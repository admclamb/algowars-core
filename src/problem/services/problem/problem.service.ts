import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagination } from 'src/common/pagination';
import { PaginationResponse } from 'src/common/pagination/PaginationResponse';
import { PaginationDto } from 'src/common/pagination/dtos/Pagination.dto';
import { Problem } from 'src/database/entities';
import { CreateProblemDto } from 'src/problem/dtos/create-problem.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProblemService {
  constructor(
    @InjectRepository(Problem)
    private readonly problemRepository: Repository<Problem>,
  ) {}

  public async getProblemsPageable(
    pageableProps: PaginationDto,
  ): Promise<PaginationResponse<Problem>> {
    const alias = 'problem';
    return Pagination.paginate<Problem>(
      this.problemRepository
        .createQueryBuilder(alias)
        .orderBy(`${alias}.createdAt`, 'DESC'),
      pageableProps,
      alias,
    );
  }

  public createProblem(createProblemDto: CreateProblemDto): Promise<Problem> {
    const newProblem = this.problemRepository.create(createProblemDto);
    return this.problemRepository.save(newProblem);
  }

  public findProblemById(id: number): Promise<Problem> {
    return this.problemRepository.findOneBy({ id });
  }
}
