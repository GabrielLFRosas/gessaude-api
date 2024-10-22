import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ParamCPF } from 'src/decorators/param-cpf.decorator';
import { ParamId } from 'src/decorators/param-id.decorator';

import { CreateUserPlacePositionDTO } from './dto/create-user-place-position.dto';
import { UserPlacePositionService } from './user-place-position.service';

@Controller('user-place-position')
export class UserPlacePositionController {

  constructor(private readonly userPlacePositionService: UserPlacePositionService){}

  @Post()
  async create(@Body() body: CreateUserPlacePositionDTO){
    return this.userPlacePositionService.create(body);
  }

  @Get()
  async list(){
    return this.userPlacePositionService.list();
  }

  @Get('user/:cpf')
  async listByUser(@ParamCPF() cpf: string){
    return this.userPlacePositionService.listByUser(cpf);
  }

  @Get('place/:id')
  async listByPlace(@ParamId() id: number){
    return this.userPlacePositionService.listByPlace(id);
  }

  @Get(':id')
  async find(@ParamId() id: number){
    return this.userPlacePositionService.find(id);
  }

  @Delete(':id')
  async remove(@ParamId() id: number){
    return this.userPlacePositionService.remove(id)
  }

}
