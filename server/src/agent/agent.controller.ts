import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { AgentService } from './agent.service';
import { UUID } from 'crypto';

@Controller('agent')
export class AgentController {
  constructor(private agentService: AgentService) {}

  @Get()
  getAll() {
    return this.agentService.getAllAgents();
  }

  @Get('/:agentid')
  getById(@Param('agentid', new ParseUUIDPipe()) agentid: UUID) {
    return this.agentService.getAgentByAngentID(agentid);
  }
}
