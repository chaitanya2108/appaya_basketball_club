import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Achievements {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  photo: string;
}