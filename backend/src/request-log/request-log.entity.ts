import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RequestLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  endpoint: string;

  @Column('text')
  requestData: string;

  @Column('text')
  responseData: string;

  @Column()
  timestamp: Date;
}
