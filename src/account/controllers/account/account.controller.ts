import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAccountDto } from 'src/account/dtos/create-account.dto';
import { AccountPermissions } from 'src/account/permissions/account.permissions';
import { AccountService } from 'src/account/services/account/account.service';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { PermissionsGuard } from 'src/authorization/permissions.guard';
import { Account } from 'src/database/entities';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  getHello(): string {
    return this.accountService.getHello();
  }

  @UseGuards(AuthorizationGuard)
  @Post('create')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  createAccount(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountService.createAccount(createAccountDto);
  }
}
