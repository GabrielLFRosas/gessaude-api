import { Module } from '@nestjs/common';
import { PlacesModule } from 'src/places/places.module';
import { PositionsModule } from 'src/positions/positions.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';

import { UserPlacePositionController } from './user-place-position.controller';
import { UserPlacePositionService } from './user-place-position.service';

@Module({
  imports: [PrismaModule, UsersModule, PlacesModule, PositionsModule],
  controllers: [UserPlacePositionController],
  providers: [UserPlacePositionService],
  exports: [UserPlacePositionService],
})
export class UserPlacePositionModule {}
