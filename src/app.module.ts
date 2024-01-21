import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest_movies', // Nombre de la base de datos como se creo en sql
    entities: [User], // Las entidades que creamos (por ejemplo la tabla usuarios es la entidad users)
    synchronize: true,
  }),
  UsersModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
