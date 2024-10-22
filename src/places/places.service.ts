import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreatePlaceDTO } from './dto/create-place.dto';

@Injectable()
export class PlacesService {

  constructor(private readonly prisma: PrismaService){}

  async create(body: CreatePlaceDTO) {
    return this.prisma.places.create({data: body, select: {id: true}});
  }

  async list(){
    return this.prisma.places.findMany();
  }

  async find(id: number){
    return this.prisma.places.findUnique({where: {id}});
  }

  async update(id: number, body: CreatePlaceDTO){
    return this.prisma.places.update({where: {id}, data: body});
  }
}
