import { Type } from "class-transformer";
import { IsEmail, IsString, IsOptional, IsPhoneNumber, IsDate } from "class-validator";
import { TypeOfUser } from "../validators/TypeValidator";

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsPhoneNumber()
  phone: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  date_of_birth: Date;

  @IsOptional()
  @TypeOfUser({
    message: 'type must be a student, coach or a manager',
  })
  @IsString()
  type: string;
}