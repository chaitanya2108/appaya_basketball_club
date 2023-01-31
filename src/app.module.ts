import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { BranchesModule } from './branches/branches.module';
import { FeedbackModule } from './feedback/feedback.module';
import { AchievementsModule } from './achievements/achievements.module';
import { ContactModule } from './contact/contact.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { Achievements } from './achievements/achievements.entity';
import { dataSourceOptions } from './db/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    AboutModule,
    BranchesModule,
    FeedbackModule,
    AchievementsModule,
    ContactModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
