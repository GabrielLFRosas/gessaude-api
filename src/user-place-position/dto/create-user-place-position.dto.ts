import { IsInt, IsString } from "class-validator";

export class CreateUserPlacePositionDTO {
  @IsString()
  userCPF: string;

  @IsInt()
  placeId: number;

  @IsInt()
  positionId: number;
}