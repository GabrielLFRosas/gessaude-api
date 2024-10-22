import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ParamId } from 'src/decorators/param-id.decorator';

import { DoctorsService } from './doctors.service';
import { CreateDoctorDTO } from './dto/create-doctor.dto';

@Controller('doctors')
export class DoctorsController {

  constructor(private readonly doctorService: DoctorsService){}

  @Post()
  async create(@Body() body: CreateDoctorDTO) {
    return this.doctorService.create(body);
  }

  @Get()
  async list(){
    return this.doctorService.list()
  }

  @Get(':id')
  async find(@ParamId() id: number){
    return this.doctorService.find(id)
  }
}
