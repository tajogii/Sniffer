import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AgentService } from 'src/agent/agent.service';
import { CreateAgentDto } from 'src/agent/dto/agent.dto';
import * as bcrypt from 'bcryptjs';
import { Agent } from 'src/agent/agent.model';
import { JwtPaylod } from './dto/agetn-auth.dto';

@Injectable()
export class AgentAuth {
    
    constructor(
        private agentService: AgentService,
        private jwtService: JwtService
    ) {}

    async login(agentDto: CreateAgentDto, agentId:string){
        const agent = await this.validateAgent(agentDto, agentId)
        return this.generateToken(agent)
        
    }

    async registration(agentDto: CreateAgentDto) {
    
        const hashPassword = await bcrypt.hash(agentDto.accessKey, 5);

        const agent = await this.agentService.createAgent({accessKey: hashPassword})

        return {
            agentId: agent.agentid,
            token: (await this.generateToken(agent)).token
        }
    }

    private async generateToken(agent: Agent) {
        const payload: JwtPaylod = {id: agent.id, accessKey: agent.accessKey, agentid: agent.agentid, role: "agent"}
        
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateAgent(agentDto: CreateAgentDto, agentId:string) {
        try{
            const agent = await this.agentService.getAgentByAngentID(agentId);
            const accessKeyEquals = await bcrypt.compare(agentDto.accessKey, agent.accessKey);
            if (agent && accessKeyEquals) {
                return agent;
            }
            throw new UnauthorizedException({message: 'Некорректный agentid или accessKey'})
        }catch(e){
            throw new UnauthorizedException({message: 'Некорректный agentid или accessKey'})
            }
        }
        
        

}
