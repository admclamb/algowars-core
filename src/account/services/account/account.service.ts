import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  public getHello(): string {
    return 'Hello humans!';
  }
}
