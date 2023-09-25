import { IsNotEmpty, MinLength } from 'class-validator';
import { Account } from 'src/database/entities';

export class CreateProblemDto {
  @IsNotEmpty()
  createdBy: Account;

  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsNotEmpty()
  @MinLength(3)
  question: string;
}
