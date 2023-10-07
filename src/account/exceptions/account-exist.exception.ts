import { HttpException } from '@nestjs/common';
import { AccountLabels } from '../labels/account.label';

export class AccountExistException extends HttpException {
  constructor() {
    super(AccountLabels.ACCOUNT_EXIST, 409);
  }
}
