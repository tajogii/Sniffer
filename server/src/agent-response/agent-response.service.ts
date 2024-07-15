import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AgentRes } from './agent-response.model';
import { UUID } from 'crypto';
import { CreateDataDto } from './dto/agent-response.dto';

@Injectable()
export class AgentResponseService {

    
    constructor(
        @InjectModel(AgentRes) private agentResModel: typeof AgentRes
    ){}


    async createData(data:CreateDataDto, agentId:UUID){
        
        const dto = {
            ...data,
            agentid: agentId
        }
        console.log(dto)
        const resData = await this.agentResModel.create(dto)
        return resData
    }
 

}
