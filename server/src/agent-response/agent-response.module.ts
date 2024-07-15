import { Module } from '@nestjs/common';
import { AgentResponseController } from './agent-response.controller';
import { AgentResponseService } from './agent-response.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Agent } from 'src/agent/agent.model';
import { AgentRes } from './agent-response.model';

@Module({
  controllers: [AgentResponseController],
  providers: [AgentResponseService],
  imports: [
    SequelizeModule.forFeature([AgentRes, Agent])
  ]
})
export class AgentResponseModule {}
