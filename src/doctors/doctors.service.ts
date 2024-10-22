import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateDoctorDTO } from './dto/create-doctor.dto';

@Injectable()
export class DoctorsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateDoctorDTO) {
    return this.prisma.doctors.create({ data: body });
  }

  async list() {
    return this.prisma.doctors
      .findMany({
        select: {
          id: true,
          users: {
            select: {
              cpf: true,
              name: true,
              email: true,
              phone: true,
              birthdate: true,
              cep: true,
              address: true,
              number: true,
              complement: true,
              district: true,
              city: true,
              state: true,
            },
          },
        },
      })
      .then((doctors) =>
        doctors.map((doctor) => ({
          id: doctor.id,
          ...doctor.users,
        })),
      );
  }

  async find(id: number) {
    const doctor = await this.prisma.doctors.findFirst({
      select: {
        id: true,
        users: {
          select: {
            cpf: true,
            name: true,
            email: true,
            phone: true,
            birthdate: true,
            cep: true,
            address: true,
            number: true,
            complement: true,
            district: true,
            city: true,
            state: true,
          },
        },
      },
      where: { id },
    });

    return {id: doctor.id, ...doctor.users}
  }
}
