import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Agent } from './agent.model';
import { v4 as uuidv4 } from 'uuid';
import { UUID } from 'crypto';
import { CreateAgentDto } from './dto/agent.dto';

@Injectable()
export class AgentService {
  constructor(@InjectModel(Agent) private agentModel: typeof Agent) {}

  async createAgent(dto: CreateAgentDto) {
    const condidat = this.createCandidat(dto.accessKey);
    const agent = await this.agentModel.create(condidat);
    return agent;
  }

  async getAllAgents() {
    const agents = await this.agentModel.findAll({
      include: { all: true, required: false },
    });
    return agents;
  }

  async getAgentByAngentID(agentid: string) {
    const agent = await this.agentModel.findOne({
      where: { agentid },
      include: { all: true },
    });
    return agent;
  }

  private createCandidat(accessKey: string) {
    return {
      agentid: uuidv4() as UUID,
      accessKey: accessKey,
    };
  }
}
