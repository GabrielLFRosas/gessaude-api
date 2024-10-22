import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ParamId } from 'src/decorators/param-id.decorator';

import { CreateServiceDTO } from './dto/create-service.dto';
import { UpdateServiceDTO } from './dto/uptade-service.dto';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private readonly serviceService: ServicesService){}

  @Post()
  async create(@Body() body: CreateServiceDTO){
    return this.serviceService.create(body)
  }
  
  @Get()
  async list(){
    return this.serviceService.list()
  }

  @Get(':id')
  async find(@ParamId() id: number){
    return this.serviceService.find(id);
  }

  @Patch(':id')
  async update(@ParamId() id: number, @Body() body: UpdateServiceDTO){
    return this.serviceService.update(id, body);
  }
  
}
