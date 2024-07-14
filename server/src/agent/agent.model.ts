import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AgentCRA{
    agentid: string
}

@Table({tableName: 'Agent'})
export class Agent extends Model<Agent, AgentCRA>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    agentid: string;

}