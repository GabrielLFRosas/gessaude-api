import { IsString } from "class-validator";

export class CreateDoctorDTO {
  @IsString()
  userCPF: string;
}