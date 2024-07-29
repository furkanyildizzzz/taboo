import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1722157036874 implements MigrationInterface {
    name = 'Migration1722157036874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" RENAME COLUMN "fullNamee" TO "fullName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" RENAME COLUMN "fullName" TO "fullNamee"`);
    }

}
