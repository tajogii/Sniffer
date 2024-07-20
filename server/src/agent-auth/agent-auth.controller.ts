import { Body, Controller, Post, Headers } from '@nestjs/common';
import { AgentAuth } from './agent-auth.service';
import { CreateAgentDto } from 'src/agent/dto/agent.dto';
import { UUID } from 'crypto';

@Controller('agent-auth')
export class AgentAuthController {

    constructor(
        private agentAuthService: AgentAuth
    ) {}

    @Post('/login')
    login(@Body() dto: CreateAgentDto, @Headers("AgentID") agentId:UUID) {
        return this.agentAuthService.login(dto, agentId)
    }

    @Post('/registration')
    registration(@Body() dto: CreateAgentDto) {
        return this.agentAuthService.registration(dto)
    }
}
