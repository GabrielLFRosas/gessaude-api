import { Test, TestingModule } from '@nestjs/testing';
import { DoctorPlaceService } from './doctor-place.service';

describe('DoctorPlaceService', () => {
  let service: DoctorPlaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorPlaceService],
    }).compile();

    service = module.get<DoctorPlaceService>(DoctorPlaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
