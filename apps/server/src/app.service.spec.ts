import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('should return entities with the expected structure', async () => {
    const result = await appService.getCommits();

    const sampleEntity = result[0];

    const expectedStructure = {
      sha: expect.anything(),
      author: expect.anything(),
      date: expect.anything(),
      message: expect.anything(),
      verified: expect.anything(),
      html_url: expect.anything(),
      avatar_url: expect.anything(),
    };

    expect(sampleEntity).toEqual(expect.objectContaining(expectedStructure));
  });
});
