import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1722157007672 implements MigrationInterface {
    name = 'Migration1722157007672'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" RENAME COLUMN "fullName" TO "fullNamee"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" RENAME COLUMN "fullNamee" TO "fullName"`);
    }

}
