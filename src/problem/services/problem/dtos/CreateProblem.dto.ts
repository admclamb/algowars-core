import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateProblemDto {
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsNotEmpty()
  @MinLength(3)
  question: string;

  likes: number;

  dislikes: number;
}
