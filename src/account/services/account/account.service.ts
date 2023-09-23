import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/database/models/account/entities/account.entity';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dtos/CreateAccount.tdo';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  public createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
    const newAccount = this.accountRepository.create(createAccountDto);
    return this.accountRepository.save(newAccount);
  }

  public findAccountById(id: number): Promise<Account> {
    return this.accountRepository.findOneBy({
      id,
    });
  }

  public findAccountByUserId(user_id: string): Promise<Account> {
    return this.accountRepository.findOneBy({
      user_id,
    });
  }
}
