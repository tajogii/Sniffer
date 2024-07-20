import { Body, Controller, Post, Headers, UseGuards } from '@nestjs/common';
import { AgentResponseService } from './agent-response.service';
import { UUID } from 'crypto';
import { CreateDataDto } from './dto/agent-response.dto';
import { JwtAgentAuthGuard } from 'src/agent-auth/jwt-agent-auth.guard';

@Controller('agent-response')
export class AgentResponseController {

    constructor(
        private agentResService: AgentResponseService
    ){}

    @UseGuards(JwtAgentAuthGuard)
    @Post()
    create(@Body() data:CreateDataDto, @Headers("AgentID") agentId:UUID){

        return this.agentResService.createData(data, agentId)
    }

}
