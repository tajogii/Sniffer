import { Agent } from "src/agent/agent.model";


export type JwtPaylodType = Pick<Agent, "accessKey" | "id" | "agentid">

export interface JwtPaylod extends JwtPaylodType{
    role: string
}