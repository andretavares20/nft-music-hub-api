import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { FindAllUsersUseCase } from './use-cases/find-all-users.use-case';
import { UpdateUserUseCase } from './use-cases/update-user.use-case';
import { DeleteUserUseCase } from './use-cases/delete-user.use-case';
import { FindUserUseCase } from './use-cases/find-user.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UsersService,
    CreateUserUseCase,
    FindAllUsersUseCase,
    FindUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
  ],
})
export class UsersModule {}
