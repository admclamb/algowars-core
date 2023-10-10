import { MigrationInterface, QueryRunner } from "typeorm";

export class FixIds1696908600203 implements MigrationInterface {
    name = 'FixIds1696908600203'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "problem_info_language" DROP CONSTRAINT "FK_c9a3cc795372b2b3b6064a6e437"`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" DROP CONSTRAINT "FK_398b226da1aeba4b348f0b9ff1d"`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" DROP COLUMN "problemIdId"`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" DROP COLUMN "languageIdId"`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" ADD "problemId" integer`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" ADD "languageId" integer`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" ADD CONSTRAINT "FK_e5277eb5494a350718a4452ccca" FOREIGN KEY ("problemId") REFERENCES "problem"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" ADD CONSTRAINT "FK_b2e3beedecbe3042bfa8fc42990" FOREIGN KEY ("languageId") REFERENCES "language"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "problem_info_language" DROP CONSTRAINT "FK_b2e3beedecbe3042bfa8fc42990"`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" DROP CONSTRAINT "FK_e5277eb5494a350718a4452ccca"`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" DROP COLUMN "languageId"`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" DROP COLUMN "problemId"`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" ADD "languageIdId" integer`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" ADD "problemIdId" integer`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" ADD CONSTRAINT "FK_398b226da1aeba4b348f0b9ff1d" FOREIGN KEY ("problemIdId") REFERENCES "problem"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" ADD CONSTRAINT "FK_c9a3cc795372b2b3b6064a6e437" FOREIGN KEY ("languageIdId") REFERENCES "language"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
