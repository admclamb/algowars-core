import { MigrationInterface, QueryRunner } from "typeorm";

export class FixProblemInfoLanguage1696908957188 implements MigrationInterface {
    name = 'FixProblemInfoLanguage1696908957188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "problem_info_language" DROP COLUMN "initialSolution"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "problem_info_language" ADD "initialSolution" text NOT NULL`);
    }

}
