import { Controller, Get, Headers, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { AgentService } from './agent.service';

@Controller('agent')
export class AgentController {

    constructor(
        private agentService: AgentService
    ){}

    @Post()
    create(@Headers("AgentID") agentId:string){
        return this.agentService.createAgent(agentId)
    }

    @Get()
    getAll() {
        return this.agentService.getAllAgents()
    }

    @Get('/:agentid')
    getById(@Param('agentid', new ParseUUIDPipe()) agentid:string) {
        return this.agentService.getAgentByAngentID(agentid)
    }
}
