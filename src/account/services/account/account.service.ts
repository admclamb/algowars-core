import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
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

  public findAccountById(id: number): Promise<Account | null> {
    return this.accountRepository.findOneBy({ id });
  }

  public findAccountByUserId(user_id: string): Promise<Account | null> {
    if (!user_id) {
      throw new NotFoundException();
    }
    return this.accountRepository.findOneBy({ user_id });
  }

  public findAccountByUsername(username: string): Promise<Account | null> {
    if (!username) {
      throw new NotFoundException();
    }
    return this.accountRepository.findOneBy({ username });
  }
}
