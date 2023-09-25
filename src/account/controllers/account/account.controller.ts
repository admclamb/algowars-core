import { Controller, Get } from '@nestjs/common';
import { AccountService } from 'src/account/services/account/account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  getHello(): string {
    return this.accountService.getHello();
  }
}
