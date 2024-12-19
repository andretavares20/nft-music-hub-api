import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    name:string;
    @Column()
    email:string;

    constructor(
        props:{
            name:string;
            email:string;
        }
    ){
        Object.assign(this,props);
    }
}
