import { Module } from '@nestjs/common';
import { AgentController } from './agent.controller';
import { AgentService } from './agent.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Agent } from './agent.model';

@Module({
  controllers: [AgentController],
  providers: [AgentService],
  imports: [
    SequelizeModule.forFeature([Agent])
  ]
})
export class AgentModule {}
