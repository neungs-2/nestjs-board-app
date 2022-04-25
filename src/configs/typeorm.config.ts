import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'board_app',
  entities: [__dirname + '/../**/*.entity.{js,ts}'], // 개별 엔티티를 하나씩 넣을 수도 있음
  synchronize: true, // production 모드에서는 false로 설정 (데이터 손실 가능성 존재)
};
