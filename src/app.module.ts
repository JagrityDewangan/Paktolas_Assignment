import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Login } from './login'


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Login],
})
export class AppModule {}
