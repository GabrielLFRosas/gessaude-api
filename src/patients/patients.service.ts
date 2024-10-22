import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreatePatientDTO } from './dto/create-patient.dto';
import { UpdatePatientDTO } from './dto/update-patient.dto';

@Injectable()
export class PatientsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreatePatientDTO) {
    return this.prisma.patients.create({ data: body, select: { cpf: true } });
  }

  async list() {
    return this.prisma.patients.findMany();
  }

  async find(cpf: string) {
    return this.prisma.patients.findFirst({ where: { cpf } });
  }

  async update(cpf: string, body: UpdatePatientDTO) {
    return this.prisma.patients.update({ where: { cpf }, data: body });
  }
}
