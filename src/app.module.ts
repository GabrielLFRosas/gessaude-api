import { forwardRef, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { WebhookModule } from './webhook/webhook.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { PlacesModule } from './places/places.module';
import { UserPlacePositionModule } from './user-place-position/user-place-position.module';
import { PositionsModule } from './positions/positions.module';
import { DoctorsModule } from './doctors/doctors.module';
import { DoctorPlaceModule } from './doctor-place/doctor-place.module';
import { PatientsModule } from './patients/patients.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [forwardRef(() => UsersModule), PrismaModule, WebhookModule, WhatsappModule, PlacesModule, UserPlacePositionModule, PositionsModule, DoctorsModule, DoctorPlaceModule, PatientsModule, ServicesModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
