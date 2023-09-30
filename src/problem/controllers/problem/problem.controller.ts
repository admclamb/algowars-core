import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PaginationResponse } from 'src/common/pagination/PaginationResponse';
import { PaginationDto } from 'src/common/pagination/dtos/Pagination.dto';
import { Problem } from 'src/database/entities';
import { CreateProblemDto } from 'src/problem/dtos/create-problem.dto';
import { ProblemService } from 'src/problem/services/problem/problem.service';

@Controller('problem')
export class ProblemController {
  constructor(private readonly problemService: ProblemService) {}

  @Get()
  getProblems(
    @Query(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
      }),
    )
    paginationDto: PaginationDto,
  ): Promise<PaginationResponse<Problem>> {
    return this.problemService.getProblemsPageable(paginationDto);
  }

  @Post('create')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  createProblem(@Body() createProblemDto: CreateProblemDto): Promise<Problem> {
    return this.problemService.createProblem(createProblemDto);
  }

  @Get('find/:id')
  findProblemById(@Param('id', ParseIntPipe) id: number): Promise<Problem> {
    return this.problemService.findProblemById(id);
  }
}
