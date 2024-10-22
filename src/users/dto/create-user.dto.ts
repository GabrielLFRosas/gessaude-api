import { IsDateString, IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDTO {
  @IsString()
  cpf: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;
  
  @IsString()
  password: string;

  @IsDateString()
  birthdate: string;

  @IsString()
  cep: string;

  @IsString()
  address: string;

  @IsString()
  number: string;

  @IsOptional()
  complement?: string;

  @IsString()
  district: string;

  @IsString()
  city: string;

  @IsString()
  state: string;
}