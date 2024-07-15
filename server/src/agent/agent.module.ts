import { Module } from '@nestjs/common';
import { AgentController } from './agent.controller';
import { AgentService } from './agent.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Agent } from './agent.model';
import { AgentRes } from 'src/agent-response/agent-response.model';

@Module({
  controllers: [AgentController],
  providers: [AgentService],
  imports: [
    SequelizeModule.forFeature([Agent, AgentRes])
  ]
})
export class AgentModule {}
