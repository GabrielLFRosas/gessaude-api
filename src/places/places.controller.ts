import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ParamId } from 'src/decorators/param-id.decorator';

import { CreatePlaceDTO } from './dto/create-place.dto';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private placeService: PlacesService){}

  @Post()
  async create(@Body() body: CreatePlaceDTO) {
    return this.placeService.create(body)
  }

  @Get()
  async list(){
    return this.placeService.list()
  }

  @Get(':id')
  async find(@ParamId() id: number){
    return this.placeService.find(id)
  }

  @Patch(':id')
  async update(@ParamId() id: number, @Body() body: CreatePlaceDTO){
    return this.placeService.update(id, body)
  }
  
}
