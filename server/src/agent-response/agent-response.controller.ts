import { Body, Controller, Post, Headers } from '@nestjs/common';
import { AgentResponseService } from './agent-response.service';
import { UUID } from 'crypto';
import { CreateDataDto } from './dto/agent-response.dto';

@Controller('agent-response')
export class AgentResponseController {

    constructor(
        private agentResService: AgentResponseService
    ){}

    @Post()
    create(@Body() data:CreateDataDto, @Headers("AgentID") agentId:UUID){

        
        return this.agentResService.createData(data, agentId)
    }

}
