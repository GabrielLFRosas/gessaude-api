import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateDoctorPlaceDTO } from './dto/create-doctor-place.dto';

@Injectable()
export class DoctorPlaceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateDoctorPlaceDTO) {
    return this.prisma.doctor_place.create({
      data: body,
      select: { id: true },
    });
  }

  async list() {
    const doctorPlaces = await this.prisma.doctor_place.findMany({
      include: {
        doctors: {
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
        },
        places: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    const responseMap = new Map();

    doctorPlaces.forEach((doctorPlace: any) => {
      const doctorId = doctorPlace.doctors.id;

      if (!responseMap.has(doctorId)) {
        responseMap.set(doctorId, {
          id: doctorId,
          ...doctorPlace.doctors.users,
          places: [],
        });
      }

      responseMap.get(doctorId).places.push(doctorPlace.places);
    });

    const response = Array.from(responseMap.values());

    return response;
  }

  async listByDoctor(doctorId: number) {
    const doctorPlaces = await this.prisma.doctor_place.findMany({
      where: { doctorId },
      include: {
        doctors: {
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
        },
        places: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    const places = [];

    doctorPlaces.map((doctorPlace: any) => {
      places.push(doctorPlace.places);
    });

    const response = {
      id: doctorPlaces[0].id,
      doctorId: doctorPlaces[0].doctors.id,
      ...doctorPlaces[0].doctors.users,
      places,
    };

    return response;
  }

  async listByPlace(placeId: number) {
    const doctorPlaces = await this.prisma.doctor_place.findMany({
      where: { placeId },
      include: {
        places: {
          select: {
            id: true,
            name: true,
          },
        },
        doctors: {
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
        },
        
      },
    });

    const doctors = [];

    doctorPlaces.map((doctorPlace: any) => {
      let doctor = {
        id: doctorPlace.doctors.id,
        ...doctorPlace.doctors.users
      }
      doctors.push(doctor);
    });

    const response = {
      id: doctorPlaces[0].id,
      ...doctorPlaces[0].places,
      doctors,
    };

    return response;
  }
}
