import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class FindAllUsersUseCase {

    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>) { }

    execute() {
        return this.userRepo.find();
    }

}