import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class DeleteUserUseCase {

    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>) { }

    execute(id: number) {
        return this.userRepo.delete(id);
    }
}