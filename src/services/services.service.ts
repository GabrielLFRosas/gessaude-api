import { Injectable } from '@nestjs/common';
import { DoctorsService } from 'src/doctors/doctors.service';
import { PatientsService } from 'src/patients/patients.service';
import { PlacesService } from 'src/places/places.service';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateServiceDTO } from './dto/create-service.dto';
import { UpdateServiceDTO } from './dto/uptade-service.dto';

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService, private readonly patientService: PatientsService,
    private readonly placeService: PlacesService,
    private readonly doctorService: DoctorsService) {}

  async create(body: CreateServiceDTO) {
    return this.prisma.services.create({
      data: body,
      select: { id: true },
    });
  }

  async list() {
    return this.prisma.services.findMany();
  }

  async find(id: number) {
    const service = await this.prisma.services.findFirst({where: {id}});
    const patient = await this.patientService.find(service.patientCPF);
    const place = await this.placeService.find(service.placeId);
    let doctor = {};
    if(service.doctorId){
      doctor = await this.doctorService.find(service.doctorId);
    }

    const response = {
      ...service,
      patient,
      place,
      doctor
    }

    return response;
  }

  async update(id: number, body: UpdateServiceDTO) {
    return this.prisma.services.update({where: {id}, data: body});
  }
}
