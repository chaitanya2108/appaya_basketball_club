import { Type } from 'class-transformer';
import { IsString, IsEmail, IsPhoneNumber, IsDate, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { TypeOfUser } from '../validators/TypeValidator';

export class FindUserDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;
}