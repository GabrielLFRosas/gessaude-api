import { Test, TestingModule } from '@nestjs/testing';
import { DoctorPlaceController } from './doctor-place.controller';

describe('DoctorPlaceController', () => {
  let controller: DoctorPlaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorPlaceController],
    }).compile();

    controller = module.get<DoctorPlaceController>(DoctorPlaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
