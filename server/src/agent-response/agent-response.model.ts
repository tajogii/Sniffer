import { UUID } from 'crypto';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Agent } from 'src/agent/agent.model';

interface AgentResCRA {
  agentid: UUID;
  data: string;
}

@Table({ tableName: 'AgentRes' })
export class AgentRes extends Model<AgentRes, AgentResCRA> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Agent)
  @Column({ type: DataType.STRING, allowNull: false })
  agentid: UUID;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  data: string;
}
