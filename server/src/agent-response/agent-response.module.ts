import { Module } from '@nestjs/common';
import { AgentResponseController } from './agent-response.controller';
import { AgentResponseService } from './agent-response.service';

@Module({
  controllers: [AgentResponseController],
  providers: [AgentResponseService]
})
export class AgentResponseModule {}
