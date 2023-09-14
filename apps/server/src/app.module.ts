import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule, HttpService } from '@nestjs/axios';

import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import * as Joi from 'joi';
import { firstValueFrom } from 'rxjs';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
      }),
    }),
    HttpModule.register({
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'COMMITS',
      inject: [HttpService],
      useFactory: async (http: HttpService) => {
        const commits = await http.get(
          'https://api.github.com/repos/Delavalom/fulltimeforce/commits',
        );
        const data = await (await firstValueFrom(commits)).data;
        return data;
      },
    },
  ],
})
export class AppModule {}
