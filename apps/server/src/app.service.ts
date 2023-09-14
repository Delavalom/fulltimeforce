import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import type { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Commit } from './entities/commit.entity';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  async getCommits(): Promise<Commit[]> {
    const commits = await firstValueFrom(
      this.httpService
        .get<Commit[]>(
          'https://api.github.com/repos/Delavalom/fulltimeforce/commits',
        )
        .pipe(
          catchError((error: AxiosError) => {
            throw error;
          }),
        ),
    );
    return commits.data;
  }
}
