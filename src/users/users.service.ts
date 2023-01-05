import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserInput } from './dto/input/create-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { User } from './models/user';

@Injectable()
export class UsersService {
    private users: User[] = [];

    public createUser(createUserData: CreateUserInput): User {
        const user: User = {
            userId: uuidv4(),
            ...createUserData //spreading create user data so if any additional data is added, it adjusts.
        }
        this.users.push(user);

        return user;
    }
    
    public updateUser(updateUserData: UpdateUserInput): User {
        const user = this.users.find(user => user.userId === updateUserData.userId)

        Object.assign(user, updateUserData);

        return user;

    public getUser(): User {

    }

    public getUsers(): User {

    }

    public deleteUser(): User {

    }

}
