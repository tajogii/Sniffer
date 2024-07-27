import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AgentRes } from './agent-response.model';
import { UUID } from 'crypto';
import { CreateDataDto } from './dto/agent-response.dto';

@Injectable()
export class AgentResponseService {
  constructor(@InjectModel(AgentRes) private agentResModel: typeof AgentRes) {}

  async createData(data: CreateDataDto, agentId: UUID) {
    const dtoObj = this.createDataObj(data, agentId);
    const resData = await this.agentResModel.create(dtoObj);
    return resData;
  }

  private createDataObj(data: CreateDataDto, agentId: UUID) {
    return {
      ...data,
      agentid: agentId,
    };
  }
}
