import { Type } from 'class-transformer';
import { IsString, IsEmail, IsPhoneNumber, IsDate } from 'class-validator';
import { TypeOfUser } from '../validators/TypeValidator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsPhoneNumber()
  phone: string;

  @Type(() => Date)
  @IsDate()
  date_of_birth: Date;

  @TypeOfUser({
    message: 'type must be a student, coach or a manager',
  })
  @IsString()
  type: string;
}
