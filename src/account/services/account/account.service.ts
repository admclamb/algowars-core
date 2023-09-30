import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAccountDto } from 'src/account/dtos/create-account.dto';
import { Account } from 'src/database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  public getHello(): string {
    return 'Hello humans!';
  }

  public createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
    const newAccount = this.accountRepository.create(createAccountDto);
    return this.accountRepository.save(newAccount);
  }
}
