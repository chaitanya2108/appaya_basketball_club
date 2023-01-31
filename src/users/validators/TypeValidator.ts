import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function TypeOfUser(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'typeOfUser',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if(value == "student" || value == "coach" || value == "manager") {
            return true;
          } // you can return a Promise<boolean> here as well, if you want to make async validation
          return false;
        },
      },
    });
  };
}