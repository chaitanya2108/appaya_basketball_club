import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(ogname: string,
    email: string,
    password: string,
    phone: string,
    date_of_birth: Date,
    type: string,) {
    // See if email is in use
    const name = null;
    const users = await this.usersService.find(name, email);
    console.log(users.length);
    if (users.length) {
      throw new BadRequestException('email in use');
    }

    // Hash the users password
    // Generate a salt
    const salt = randomBytes(8).toString('hex');

    // Hash the salt and the password together
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    // Join the hashed result and the salt together
    const result = salt + '.' + hash.toString('hex');

    //Create a new user and save it
    const user = await this.usersService.create(ogname, email, result, phone, date_of_birth, type)

    // return the user
    return user;
  }

  signin() {}
}
