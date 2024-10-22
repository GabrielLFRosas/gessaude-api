import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ParamId } from 'src/decorators/param-id.decorator';

import { DoctorPlaceService } from './doctor-place.service';
import { CreateDoctorPlaceDTO } from './dto/create-doctor-place.dto';

@Controller('doctor-place')
export class DoctorPlaceController {

  constructor(private readonly doctorPlaceService: DoctorPlaceService){}

  @Post()
  async create(@Body() body: CreateDoctorPlaceDTO){
    return this.doctorPlaceService.create(body);
  }

  @Get()
  async list() {
    return this.doctorPlaceService.list()
  }

  @Get('doctor/:id')
  async listByDoctor(@ParamId() id: number){
    return this.doctorPlaceService.listByDoctor(id)
  }

  @Get('place/:id')
  async listByPlace(@ParamId() id: number){
    return this.doctorPlaceService.listByPlace(id)
  }
}
