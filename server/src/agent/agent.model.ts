import { UUID } from 'crypto';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { AgentRes } from 'src/agent-response/agent-response.model';

interface AgentCRA {
  agentid: UUID;
  accessKey: string;
}

@Table({ tableName: 'Agent' })
export class Agent extends Model<Agent, AgentCRA> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  agentid: UUID;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  accessKey: string;

  @HasMany(() => AgentRes)
  data: AgentRes[];
}
