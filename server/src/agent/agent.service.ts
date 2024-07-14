import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Agent } from './agent.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AgentService {

    constructor(
        @InjectModel(Agent) private agentModel: typeof Agent
    ){}


    async createAgent(agentId:string){
        
        if (agentId){
            throw new HttpException('10', HttpStatus.FORBIDDEN)
        }

        const uuid = uuidv4()
        const agent = await this.agentModel.create({agentid: uuid})
        return agent
    }

    async getAllAgents(){
        const agents = await this.agentModel.findAll({include: {all:true}})
        return agents
    }

    async getAgentByAngentID(agentid:string){
        const agent = await this.agentModel.findOne({where: {agentid}, include: {all: true}})
        return agent
    }

}
