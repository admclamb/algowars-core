import { Module } from '@nestjs/common';
import { AccountService } from './services/account/account.service';
import { AccountController } from './controllers/account/account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/database/models';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  providers: [AccountService],
  controllers: [AccountController],
})
export class AccountModule {}
