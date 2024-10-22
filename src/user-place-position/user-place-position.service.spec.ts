import { Test, TestingModule } from '@nestjs/testing';
import { UserPlacePositionService } from './user-place-position.service';

describe('UserPlacePositionService', () => {
  let service: UserPlacePositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPlacePositionService],
    }).compile();

    service = module.get<UserPlacePositionService>(UserPlacePositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
