import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ParamCPF } from 'src/decorators/param-cpf.decorator';

import { CreatePatientDTO } from './dto/create-patient.dto';
import { UpdatePatientDTO } from './dto/update-patient.dto';
import { PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {

  constructor(private readonly patientService: PatientsService){}

  @Post()
  async create(@Body() body: CreatePatientDTO){
    return this.patientService.create(body);
  }

  @Get()
  async list(){
    return this.patientService.list();
  }

  @Get(':cpf')
  async find(@ParamCPF() cpf: string){
    return this.patientService.find(cpf);
  }

  @Patch(':cpf')
  async update(@ParamCPF() cpf: string, @Body() body: UpdatePatientDTO){
    return this.patientService.update(cpf, body);
  }
}
