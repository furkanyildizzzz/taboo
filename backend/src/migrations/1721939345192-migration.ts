import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1721939345192 implements MigrationInterface {
    name = 'Migration1721939345192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "games" ("id" SERIAL NOT NULL, "gameCode" character varying NOT NULL, "gameTurn" integer NOT NULL, "gameTime" integer NOT NULL, "gameTeam" integer NOT NULL, CONSTRAINT "UQ_7b6dbcdbcde7e71b78d3e4c0e91" UNIQUE ("gameCode"), CONSTRAINT "PK_c9b16b62917b5595af982d66337" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "games"`);
    }

}
