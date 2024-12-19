import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CreateUserUseCase {

    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>) { }

    execute(createUserDto: CreateUserDto) {
        const user = new User(createUserDto);
        return this.userRepo.save(user);
    }
}