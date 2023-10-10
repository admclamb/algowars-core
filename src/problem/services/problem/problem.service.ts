import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagination } from 'src/common/pagination';
import { PaginationResponse } from 'src/common/pagination/PaginationResponse';
import { PaginationDto } from 'src/common/pagination/dtos/Pagination.dto';
import { Problem } from 'src/database/entities';
import { ProblemInfoLanguage } from 'src/database/entities/problem-info-language.entity';
import { ProblemWithInfos } from 'src/database/models/problem-with-infos';
import { CreateProblemDto } from 'src/problem/dtos/create-problem.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProblemService {
  constructor(
    @InjectRepository(Problem)
    private readonly problemRepository: Repository<Problem>,
    @InjectRepository(ProblemInfoLanguage)
    private readonly problemInfoLanguageRepository: Repository<ProblemInfoLanguage>,
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

  public findProblemInfoLanguagesById(
    id: number,
  ): Promise<ProblemInfoLanguage[]> {
    return this.problemInfoLanguageRepository
      .createQueryBuilder('problemInfoLanguage')
      .leftJoinAndSelect('problemInfoLanguage.language', 'language') // Join with the 'Language' entity
      .where('problemInfoLanguage.problem.id = :id', { id })
      .getMany();
  }

  public async findProblemById(id: number): Promise<Problem> {
    const problem = await this.problemRepository
      .createQueryBuilder('problem')
      .where('problem.id = :id', { id })
      .leftJoinAndSelect('problem.createdBy', 'account')
      .leftJoinAndSelect('problem.problemCategories', 'problemCategories')
      .leftJoinAndSelect('problemCategories.category', 'category')
      .getOne();
    if (!problem) {
      return null;
    }
    const problemInfoLanguage = await this.findProblemInfoLanguagesById(id);
    const problemWithInfo: ProblemWithInfos = {
      ...problem,
      infos: problemInfoLanguage,
    };
    return problemWithInfo;
  }
}
