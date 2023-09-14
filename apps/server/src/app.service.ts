import { HttpService } from '@nestjs/axios';
import {
  Inject,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import type { AxiosError } from 'axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import config from './config';
import type { Commit } from './entities/commit.entity';
import { GithubCommit } from './types';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  async getCommits(page = 1, limit = 30): Promise<Commit[]> {
    const user = this.configService.user;
    const repo = this.configService.repo;
    const commits = await firstValueFrom(
      this.httpService
        .get<GithubCommit[]>(
          `https://api.github.com/repos/${user}/${repo}/commits?page=${page}&per_page=${limit}`,
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
                username: author.login,
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
