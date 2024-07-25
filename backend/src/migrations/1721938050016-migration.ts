import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1721938050016 implements MigrationInterface {
    name = 'Migration1721938050016'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "firstNamee"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastNamee"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "firstName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "lastName" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "lastNamee" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "firstNamee" character varying NOT NULL`);
    }

}
