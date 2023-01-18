import { PrimaryGeneratedColumn, Column, Entity, OneToOne, ManyToMany, JoinTable } from "typeorm";

@Entity('many-user')
export class User {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    id: number

    @Column({
        type:'varchar'
    })
    name: string

    @Column({
        type: 'int'
    })
    age: number
}