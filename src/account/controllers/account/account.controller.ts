import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAccountDto } from 'src/account/dtos/create-account.dto';
import { AccountService } from 'src/account/services/account/account.service';
import { Account } from 'src/database/entities';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  getHello(): string {
    return this.accountService.getHello();
  }

  @Post('create')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  createAccount(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountService.createAccount(createAccountDto);
  }
}
