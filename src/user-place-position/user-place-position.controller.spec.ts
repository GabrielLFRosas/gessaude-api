import { Test, TestingModule } from '@nestjs/testing';
import { UserPlacePositionController } from './user-place-position.controller';

describe('UserPlacePositionController', () => {
  let controller: UserPlacePositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPlacePositionController],
    }).compile();

    controller = module.get<UserPlacePositionController>(UserPlacePositionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
