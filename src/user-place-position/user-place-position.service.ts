import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserPlacePositionDTO } from './dto/create-user-place-position.dto';

@Injectable()
export class UserPlacePositionService {
  constructor(private readonly prisma: PrismaService){}

  async create(body: CreateUserPlacePositionDTO){
    return this.prisma.user_place_position.create({data: body, select: {id: true}})
  }

  async list(){
    return this.prisma.user_place_position.findMany()
  }

  async listByUser(userCPF: string){
    return this.prisma.user_place_position.findMany({where: {userCPF}})
  }

  async listByPlace(placeId: number){
    return this.prisma.user_place_position.findMany({where: {placeId}})
  }

  async find(id: number){
    return this.prisma.user_place_position.findFirst({where: {id}})
  }

  async remove(id: number){
    return this.prisma.user_place_position.delete({where: {id}})
  }
}
