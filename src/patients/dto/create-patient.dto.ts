import { IsDateString, IsEmail, IsOptional, IsString } from "class-validator";

export class CreatePatientDTO {
  @IsString()
  cpf: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsString()
  whatsapp: string;

  @IsDateString()
  birthdate: string;

  @IsString()
  cep: string;

  @IsString()
  address: string;

  @IsString()
  number: string;

  @IsOptional()
  @IsString()
  complement?: string;

  @IsString()
  district: string;

  @IsString()
  city: string;

  @IsString()
  state: string;
}