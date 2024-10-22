import { Module } from '@nestjs/common';
import { DoctorsModule } from 'src/doctors/doctors.module';
import { PlacesModule } from 'src/places/places.module';
import { PrismaModule } from 'src/prisma/prisma.module';

import { DoctorPlaceController } from './doctor-place.controller';
import { DoctorPlaceService } from './doctor-place.service';

@Module({
  imports: [PrismaModule, DoctorsModule, PlacesModule],
  controllers: [DoctorPlaceController],
  providers: [DoctorPlaceService],
  exports: [DoctorPlaceService]
})
export class DoctorPlaceModule {}
