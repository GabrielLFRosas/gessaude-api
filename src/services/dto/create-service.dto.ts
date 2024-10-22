import { IsDateString, IsInt, IsOptional, IsString } from "class-validator";

export class CreateServiceDTO {
  @IsInt()
  placeId: number;

  @IsString()
  patientCPF: string;

  @IsOptional()
  @IsInt()
  doctorId?: number;

  @IsString()
  serviceDate: string;

  @IsOptional()
  @IsInt()
  status?: number;
}
