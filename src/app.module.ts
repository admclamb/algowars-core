import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AccountModule } from './account/account.module';
import { ProblemModule } from './problem/problem.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    AccountModule,
    ProblemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
