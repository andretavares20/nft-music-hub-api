import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { UpdateUserDto } from "../dto/update-user.dto";

@Injectable()
export class UpdateUserUseCase {

    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>) { }

    async execute(id: number, updateUserDto: UpdateUserDto) {
        const user = await this.userRepo.findOneOrFail({ where: { id } });

        updateUserDto.name && (user.name = updateUserDto.name);
        updateUserDto.email && (user.email = updateUserDto.email);

        return this.userRepo.save(user);
    }
}