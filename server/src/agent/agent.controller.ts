import { Body, Controller, Get, Headers, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { AgentService } from './agent.service';
import { UUID } from 'crypto';

@Controller('agent')
export class AgentController {

    constructor(
        private agentService: AgentService
    ){}

    @Post()
    create(@Headers("AgentID") agentId:UUID, @Body()dto){
        return this.agentService.createAgent(agentId, dto)
    }

    @Get()
    getAll() {
        return this.agentService.getAllAgents()
    }

    @Get('/:agentid')
    getById(@Param('agentid', new ParseUUIDPipe()) agentid:UUID) {
        return this.agentService.getAgentByAngentID(agentid)
    }
}
