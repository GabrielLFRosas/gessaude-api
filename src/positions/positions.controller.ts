import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ParamId } from 'src/decorators/param-id.decorator';

import { CreatePositionDTO } from './dto/create-position.dto';
import { UpdatePositionDTO } from './dto/update-position.dto';
import { PositionsService } from './positions.service';

@Controller('positions')
export class PositionsController {

  constructor(private readonly positionService: PositionsService){}

  @Post()
  async create(@Body() body: CreatePositionDTO) {
    return this.positionService.create(body);
  }

  @Get()
  async list() {
    return this.positionService.list();
  }

  @Get(':id')
  async find(@ParamId() id: number) {
    return this.positionService.find(id);
  }

  @Patch(':id')
  async update(@ParamId() id: number, @Body() body: UpdatePositionDTO){
    return this.positionService.update(id, body);
  }
}
