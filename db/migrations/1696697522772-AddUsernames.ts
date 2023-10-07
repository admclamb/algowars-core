import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUsernames1696697522772 implements MigrationInterface {
  name = 'AddUsernames1696697522772';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "account" ADD "username" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "account" ADD CONSTRAINT "UQ_41dfcb70af895ddf9a53094515b" UNIQUE ("username")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "account" DROP CONSTRAINT "UQ_41dfcb70af895ddf9a53094515b"`,
    );
    await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "username"`);
  }
}
