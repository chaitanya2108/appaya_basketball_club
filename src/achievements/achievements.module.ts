import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AchievementsController } from './achievements.controller';
import { Achievements } from './achievements.entity';
import { AchievementsService } from './achievements.service';

@Module({
  imports: [TypeOrmModule.forFeature([Achievements])],
  controllers: [AchievementsController],
  providers: [AchievementsService]
})
export class AchievementsModule {}
