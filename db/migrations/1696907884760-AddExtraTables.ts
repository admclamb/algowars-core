import { MigrationInterface, QueryRunner } from "typeorm";

export class AddExtraTables1696907884760 implements MigrationInterface {
    name = 'AddExtraTables1696907884760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "language" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_7df7d1e250ea2a416f078a631fb" UNIQUE ("name"), CONSTRAINT "PK_cc0a99e710eb3733f6fb42b1d4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "problem_category" ("categoryId" integer NOT NULL, "problemId" integer NOT NULL, CONSTRAINT "PK_216af298edc283310a735037622" PRIMARY KEY ("categoryId", "problemId"))`);
        await queryRunner.query(`CREATE TABLE "problem_info_language" ("id" SERIAL NOT NULL, "initialSolution" text NOT NULL, "baseCode" text NOT NULL, "problemIdId" integer, "languageIdId" integer, CONSTRAINT "PK_067d55c64aad070f3ee20c8af38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "problem_category" ADD CONSTRAINT "FK_5e4c9c7b3b2c2e3464004ebfd5b" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "problem_category" ADD CONSTRAINT "FK_b3a297f09256b19d7152bbe7835" FOREIGN KEY ("problemId") REFERENCES "problem"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" ADD CONSTRAINT "FK_398b226da1aeba4b348f0b9ff1d" FOREIGN KEY ("problemIdId") REFERENCES "problem"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" ADD CONSTRAINT "FK_c9a3cc795372b2b3b6064a6e437" FOREIGN KEY ("languageIdId") REFERENCES "language"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "problem_info_language" DROP CONSTRAINT "FK_c9a3cc795372b2b3b6064a6e437"`);
        await queryRunner.query(`ALTER TABLE "problem_info_language" DROP CONSTRAINT "FK_398b226da1aeba4b348f0b9ff1d"`);
        await queryRunner.query(`ALTER TABLE "problem_category" DROP CONSTRAINT "FK_b3a297f09256b19d7152bbe7835"`);
        await queryRunner.query(`ALTER TABLE "problem_category" DROP CONSTRAINT "FK_5e4c9c7b3b2c2e3464004ebfd5b"`);
        await queryRunner.query(`DROP TABLE "problem_info_language"`);
        await queryRunner.query(`DROP TABLE "problem_category"`);
        await queryRunner.query(`DROP TABLE "language"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
