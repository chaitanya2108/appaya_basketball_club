import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindUserDto } from './dtos/find-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(
    name: string,
    email: string,
    password: string,
    phone: string,
    date_of_birth: Date,
    type: string,
  ) {
    let timeDiff = Math.abs(Date.now() - date_of_birth.getTime());
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    const user = this.repo.create({
      name,
      email,
      password,
      phone,
      date_of_birth,
      age,
      type,
    });

    return this.repo.save(user);
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  find(
    name: string, 
    email: string) {
    if (name == null && email == null) {
      return this.repo.find();
    }
    return this.repo
      .createQueryBuilder()
      .where('name = :name', { name })
      .orWhere('email = :email', { email })
      .getRawMany();
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    if (attrs.date_of_birth) {
      let timeDiff = Math.abs(Date.now() - attrs.date_of_birth.getTime());
      attrs.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
