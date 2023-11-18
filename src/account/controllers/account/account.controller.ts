import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAccountDto } from 'src/account/dtos/create-account.dto';
import { AccountExistException } from 'src/account/exceptions/account-exist.exception';
import { UsernameExistException } from 'src/account/exceptions/username-exist.exception';
import { AccountService } from 'src/account/services/account/account.service';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { PermissionsGuard } from 'src/authorization/permissions.guard';
import { Account } from 'src/database/entities';

@Controller('v1/account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  getHello(): string {
    return this.accountService.getHello();
  }

  @UseGuards(AuthorizationGuard)
  @Get('/find')
  findAccount(@Query('sub') user_id: string): Promise<Account> {
    return this.accountService.findAccountByUserId(user_id);
  }

  @UseGuards(AuthorizationGuard)
  @Post('create')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  async createAccount(
    @Body() createAccountDto: CreateAccountDto,
  ): Promise<Account> {
    const { user_id, username } = createAccountDto;

    const accountExist = await this.accountService.findAccountByUserId(user_id);
    if (accountExist) {
      throw new AccountExistException();
    }
    const usernameExist = await this.accountService.findAccountByUsername(
      username,
    );
    if (usernameExist) {
      throw new UsernameExistException();
    }
    return this.accountService.createAccount(createAccountDto);
  }
}
