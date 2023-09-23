import { Controller } from '@nestjs/common';
import { ProblemService } from 'src/problem/services/problem/problem.service';
import {
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProblemDto } from 'src/problem/services/problem/dtos/CreateProblem.dto';

@Controller('problem')
export class ProblemController {
  constructor(private readonly problemService: ProblemService) {}

  @Get('id/:id')
  public getProblemById(@Param('id', ParseIntPipe) id: number) {
    return this.problemService.findProblemById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  public createPost(@Body() createProblemDto: CreateProblemDto) {
    return this.problemService.createProblem(createProblemDto);
  }
}
