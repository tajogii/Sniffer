import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AgentResponseModule } from './agent-response/agent-response.module';
import { AgentModule } from './agent/agent.module';

@Module({
  controllers:[],
  providers:[],
  imports:[
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'xxXX1234',
      database: 'db',
      models: [],
      autoLoadModels: true
    }),
    AgentResponseModule,
    AgentModule, 
  ]
  
})
export class AppModule{}