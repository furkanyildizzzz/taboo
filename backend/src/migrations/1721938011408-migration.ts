import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1721938011408 implements MigrationInterface {
    name = 'Migration1721938011408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "lastName" TO "lastNamee"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "lastNamee" TO "lastName"`);
    }

}
