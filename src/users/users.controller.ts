import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ParamCPF } from 'src/decorators/param-cpf.decorator';

import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService){}

  @Post()
  async create(@Body() body: CreateUserDTO){
    return this.userService.create(body)
  }

  @Get()
  async list(){
    return this.userService.list()
  }

  @Get(':cpf')
  async find(@ParamCPF() cpf: string){
    return this.userService.find(cpf)
  }

  @Patch(':cpf')
  async update(@ParamCPF() cpf: string, @Body() body: UpdateUserDTO){
    return this.userService.update(cpf, body)
  }


}
