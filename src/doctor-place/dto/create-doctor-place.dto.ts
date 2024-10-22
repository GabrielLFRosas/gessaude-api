import { IsInt } from "class-validator";

export class CreateDoctorPlaceDTO {
  @IsInt()
  doctorId: number;

  @IsInt()
  placeId: number;
}