import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreatePositionDTO } from './dto/create-position.dto';
import { UpdatePositionDTO } from './dto/update-position.dto';

@Injectable()
export class PositionsService {
  constructor(private readonly prisma: PrismaService){}

  async create(body: CreatePositionDTO){
    return this.prisma.positions.create({data: body, select: {id: true}});
  }

  async list(){
    return this.prisma.positions.findMany();
  }

  async find(id: number){
    return this.prisma.positions.findFirst({where: {id}});
  }

  async update(id: number, body: UpdatePositionDTO){
    return this.prisma.positions.update({where: {id}, data: body});
  }
}
