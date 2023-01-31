import { Achievements } from 'src/achievements/achievements.entity';
import { User } from 'src/users/users.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Shivani12',
  database: 'sports_academy',
  entities: [User, Achievements],
  synchronize: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
