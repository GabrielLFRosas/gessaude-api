import { IsString } from "class-validator";

export class CreatePlaceDTO {
  @IsString()
  name: string;
}