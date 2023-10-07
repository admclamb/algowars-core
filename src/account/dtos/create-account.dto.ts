import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @MinLength(3)
  user_id: string;

  @IsNotEmpty()
  username: string;
}
