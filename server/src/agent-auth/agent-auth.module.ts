import { forwardRef, Module } from '@nestjs/common';
import { AgentAuth } from './agent-auth.service';
import { AgentAuthController } from './agent-auth.controller';
import { AgentModule } from 'src/agent/agent.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AgentAuth],
  controllers: [AgentAuthController],
  imports: [
    forwardRef(() => AgentModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  exports: [AgentAuth, JwtModule],
})
export class AgentAuthModule {}
