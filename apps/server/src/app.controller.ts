import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Commit } from './entities/commit.entity';
import { ListAllEntities } from './dtos/commit.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll(@Query() query: ListAllEntities): Promise<Commit[]> {
    return this.appService.getCommits(query.page, query.limit);
  }
}
