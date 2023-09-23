import {
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Controller,
} from '@nestjs/common';
import { AccountService } from 'src/account/services/account/account.service';
import { CreateAccountDto } from 'src/account/services/account/dtos/CreateAccount.tdo';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('id/:id')
  public getProblemById(@Param('id', ParseIntPipe) id: number) {
    return this.accountService.findAccountById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  public createPost(@Body() createAccountDto: CreateAccountDto) {
    return this.accountService.createAccount(createAccountDto);
  }
}
