import { PartialType } from "@nestjs/mapped-types";
import { IsDateString, IsInt, IsOptional, IsString } from "class-validator";

import { CreateServiceDTO } from "./create-service.dto";

export class UpdateServiceDTO extends PartialType(CreateServiceDTO){}
