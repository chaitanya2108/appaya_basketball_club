import { Expose, Type } from "class-transformer";
import { IsBoolean, IsDate, IsEmail, IsNumber, IsPhoneNumber, IsString } from "class-validator";
import { TypeOfUser } from "../validators/TypeValidator";

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  date_of_birth: Date;

  @Expose()
  age: number;

  @Expose()
  admin: boolean;

  @Expose()
  type: string;
}