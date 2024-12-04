import {
  ConflictException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { User } from '../entities/user.entity';
import { DataSource } from 'typeorm';
import { CreateManyUsersDto } from '../dto/create-many-users.dto';

@Injectable()
export class UsersCreateManyProvider {
  constructor(
    /**
     * Inject Datasource
     */
    private readonly dataSource: DataSource,
  ) {}
  async creatMany(createManyUsersDto: CreateManyUsersDto) {
    const newUsers: User[] = [];
    //Create a query runner instance
    const queryRunner = this.dataSource.createQueryRunner();

    try {
      //connect query runner instance with datascource
      await queryRunner.connect();
      //start Transaction

      await queryRunner.startTransaction();
    } catch (e) {
      throw new RequestTimeoutException('Could not connect to the database');
    }

    //if successfull commit
    try {
      for (const user of createManyUsersDto.users) {
        const newUser = queryRunner.manager.create(User, user);
        const result = await queryRunner.manager.save(newUser);
        newUsers.push(result);
      }
      await queryRunner.commitTransaction();
    } catch (e) {
      //if unsuccessfull , rollback
      await queryRunner.rollbackTransaction();
      throw new ConflictException('Could not complete the transaction', {
        description: String(e),
      });
    } finally {
      try {
        //Release connection
        await queryRunner.release();
      } catch (e) {
        throw new RequestTimeoutException('Could not release the COnnection', {
          description: String(e),
        });
      }
    }
    return { users: newUsers };
  }
}
