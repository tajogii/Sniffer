import {CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";
import { Request } from "express";
import { JwtPaylod } from "./dto/agetn-auth.dto";

@Injectable()
export class JwtAgentAuthGuard implements CanActivate {
    
    constructor(
        private jwtService: JwtService
    ) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest<Request>()
        try {

            return this.checkToken(req) && this.checkHeader(req)
        } catch (e) {
            throw e
        }


        
    }
    private checkToken(req:Request){
        const authHeader = req.headers.authorization
        const bearer = authHeader.split(' ')[0]
        const token = authHeader.split(' ')[1]

        if (bearer !== 'Bearer' || !token) {
            throw new UnauthorizedException({message: 'Агент не авторизован'})
        }
        const agent = this.jwtService.verify<JwtPaylod>(token)

        if (agent.agentid !== req.headers.agentid){
            throw new HttpException( 'Передан неверный agentId', HttpStatus.BAD_REQUEST)
        }

        return true
    }

    private checkHeader(req:Request){
        const agentidHeader = req.headers.agentid
        console.log(agentidHeader)

        if (!agentidHeader){
            throw new HttpException( 'Не передан agentId', HttpStatus.BAD_REQUEST)
        }

        return true
        
    }

}