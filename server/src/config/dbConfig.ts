import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  type: 'postgres',
  url: 'postgresql://neondb_owner:UyS4x2rjskVd@ep-snowy-cherry-a5ni9w3w.us-east-2.aws.neon.tech/neondb?sslmode=require',
  port: 3306,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // only "true" develop mod
};
