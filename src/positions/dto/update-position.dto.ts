import { PartialType } from '@nestjs/mapped-types';

import { CreatePositionDTO } from './create-position.dto';

export class UpdatePositionDTO extends PartialType(CreatePositionDTO) {}