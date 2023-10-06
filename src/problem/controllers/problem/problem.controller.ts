import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { PermissionsGuard } from 'src/authorization/permissions.guard';
import { PaginationResponse } from 'src/common/pagination/PaginationResponse';
import { PaginationDto } from 'src/common/pagination/dtos/Pagination.dto';
import { Problem } from 'src/database/entities';
import { CreateProblemDto } from 'src/problem/dtos/create-problem.dto';
import { ProblemPermissions } from 'src/problem/permissions/problem.permissions';
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

  @UseGuards(PermissionsGuard([ProblemPermissions.WRITE_ADMIN]))
  @UseGuards(AuthorizationGuard)
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
