import { HttpService } from '@nestjs/axios';
import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import type { AxiosError } from 'axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import type { Commit } from './entities/commit.entity';
import { GithubCommit } from './types';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  async getCommits(page = 1, limit = 30): Promise<Commit[]> {
    const commits = await firstValueFrom(
      this.httpService
        .get<GithubCommit[]>(
          `https://api.github.com/repos/Delavalom/fulltimeforce/commits?page=${page}&per_page=${limit}`,
        )
        .pipe(
          map((res) =>
            res.data.map(({ sha, commit, html_url, author }) => {
              return {
                sha: sha,
                author: commit.author.name,
                date: commit.author.date,
                message: commit.message,
                verified: commit.verification.verified,
                html_url: html_url,
                avatar_url: author.avatar_url,
              };
            }),
          ),
          catchError((error: AxiosError) => {
            throw new ServiceUnavailableException(error.message);
          }),
        ),
    );
    return commits;
  }
}
