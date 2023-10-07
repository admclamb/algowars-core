import { HttpException } from '@nestjs/common';
import { AccountLabels } from '../labels/account.label';

export class UsernameExistException extends HttpException {
  constructor() {
    super(AccountLabels.USERNAME_EXIST, 409);
  }
}
