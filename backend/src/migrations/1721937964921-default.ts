import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1721937964921 implements MigrationInterface {
    name = 'Default1721937964921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "firstName" TO "firstNamee"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "firstNamee" TO "firstName"`);
    }

}
