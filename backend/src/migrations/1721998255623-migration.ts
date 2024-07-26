import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1721998255623 implements MigrationInterface {
    name = 'Migration1721998255623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "players" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "ipAddress" character varying NOT NULL, "gameCodeId" integer, CONSTRAINT "UQ_0862615649657cd118a80b83534" UNIQUE ("fullName"), CONSTRAINT "UQ_d1bb4b3b0f6b67b516ac73eb5a2" UNIQUE ("ipAddress"), CONSTRAINT "REL_accafe365079f6518e9cfd04ee" UNIQUE ("gameCodeId"), CONSTRAINT "PK_de22b8fdeee0c33ab55ae71da3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "games" ADD "ownerId" integer`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "UQ_7ba31d25ad376fbcb7f8a20a8db" UNIQUE ("ownerId")`);
        await queryRunner.query(`ALTER TABLE "players" ADD CONSTRAINT "FK_accafe365079f6518e9cfd04ee3" FOREIGN KEY ("gameCodeId") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "games" ADD CONSTRAINT "FK_7ba31d25ad376fbcb7f8a20a8db" FOREIGN KEY ("ownerId") REFERENCES "players"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "FK_7ba31d25ad376fbcb7f8a20a8db"`);
        await queryRunner.query(`ALTER TABLE "players" DROP CONSTRAINT "FK_accafe365079f6518e9cfd04ee3"`);
        await queryRunner.query(`ALTER TABLE "games" DROP CONSTRAINT "UQ_7ba31d25ad376fbcb7f8a20a8db"`);
        await queryRunner.query(`ALTER TABLE "games" DROP COLUMN "ownerId"`);
        await queryRunner.query(`DROP TABLE "players"`);
    }

}
