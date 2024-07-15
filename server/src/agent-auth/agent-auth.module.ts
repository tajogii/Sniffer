import { Module } from '@nestjs/common';
import { AgentAuth } from './agent-auth';
import { AgentAuthController } from './agent-auth.controller';

@Module({
  providers: [AgentAuth],
  controllers: [AgentAuthController]
})
export class AgentAuthModule {}
