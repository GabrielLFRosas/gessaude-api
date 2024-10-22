import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateUserDTO) {
    try {
      body.password = '123456'
      return this.prisma.users.create({ data: body, select: { cpf: true } });
    } catch (e) {
      throw new BadRequestException(`Ocorreu um erro ao criar usuário - ${e}`);
    }
  }

  async list() {
    try {
      return this.prisma.users.findMany();
    } catch (e) {
      throw new BadRequestException(
        `Ocorreu um erro ao listar usuários - ${e}`,
      );
    }
  }

  async find(cpf: string) {
    try {
      return this.prisma.users.findFirst({where: {cpf: cpf}});
    } catch (e) {
      throw new BadRequestException(
        `Ocorreu um erro ao buscar usuário - ${e}`,
      );
    }
  }

  async update(cpf: string, body: UpdateUserDTO) {
    try {
      return this.prisma.users.update({where: {cpf: cpf}, data: body});
    } catch (e) {
      throw new BadRequestException(
        `Ocorreu um erro ao buscar usuário - ${e}`,
      );
    }
  }

}
