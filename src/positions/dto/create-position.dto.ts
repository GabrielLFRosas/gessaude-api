import { IsString } from "class-validator";

export class CreatePositionDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;
  
}