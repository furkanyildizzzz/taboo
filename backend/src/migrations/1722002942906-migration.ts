import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1722002942906 implements MigrationInterface {
    name = 'Migration1722002942906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" DROP CONSTRAINT "FK_accafe365079f6518e9cfd04ee3"`);
        await queryRunner.query(`ALTER TABLE "players" RENAME COLUMN "gameCodeId" TO "gameId"`);
        await queryRunner.query(`ALTER TABLE "players" ADD CONSTRAINT "FK_e987db4cbe03070958e54074005" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" DROP CONSTRAINT "FK_e987db4cbe03070958e54074005"`);
        await queryRunner.query(`ALTER TABLE "players" RENAME COLUMN "gameId" TO "gameCodeId"`);
        await queryRunner.query(`ALTER TABLE "players" ADD CONSTRAINT "FK_accafe365079f6518e9cfd04ee3" FOREIGN KEY ("gameCodeId") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
