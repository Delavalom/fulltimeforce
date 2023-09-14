import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('COMMITS') private commits: any[]) {}
  getCommits(): any[] {
    return this.commits;
  }
}
