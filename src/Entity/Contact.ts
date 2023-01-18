import { PrimaryGeneratedColumn, Entity, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { User } from './User';

@Entity('many-contact')
export class Contact {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    job: string

    @Column()
    experience: string

    @ManyToMany(() => User, {
        cascade: ["insert", 'update'],
        eager: true,
        onDelete: 'CASCADE'
    })
    @JoinTable()
    details: User[]
}