import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AgentResponseModule } from './agent-response/agent-response.module';
import { AgentModule } from './agent/agent.module';
import { ConfigModule } from '@nestjs/config';
import { Agent } from './agent/agent.model';

@Module({
  controllers:[],
  providers:[],
  imports:[
    ConfigModule.forRoot({
      envFilePath:'.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Agent],
      autoLoadModels: true
  }),
    AgentResponseModule,
    AgentModule, 
  ]
  
})
export class AppModule{}