import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export interface IUserRepository {
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User>;
}

@Injectable()
export class UserTypeOrmRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private typeOrmRepo: Repository<User>,
  ) {}

  async create(user: User): Promise<void> {
    await this.typeOrmRepo.save(user);
  }

  async update(user: User): Promise<void> {
    await this.typeOrmRepo.update(user.id, user);
  }

  findAll(): Promise<User[]> {
    return this.typeOrmRepo.find();
  }

  findById(id: number): Promise<User> {
    return this.typeOrmRepo.findOneOrFail({ where: { id } });
  }
}
