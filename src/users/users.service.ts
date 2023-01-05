import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { GetUsersArgs } from './dto/args/get-users.args';
import { GetUserArgs } from './dto/args/get-user.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { User } from './models/user';
import { DeleteUserInput } from './dto/input/delete-user.input';

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
    }

    public getUser(getSingleUser: GetUserArgs): User {
        return this.users.find((user) => user.userId === getSingleUser.userId);
    }

    public getUsers(getMultipleUsers: GetUsersArgs): User {
        // basically what's happening here ^^ is we have a variable 'getMulti..' with a type/class of GetUserArgs. 
        // by specifying this class, we can access the fields within that class
        // in this case we want to return the userIds denoted in the GetUserArgs class.

        return getMultipleUsers.userIds.map(userId => this.getUser({ userId }));
    }

    public deleteUser(deleteUserData: DeleteUserInput): User {
        const userIndex = this.users.findIndex(user => user.userId === deleteUserData.userId);

        const userToBeDeleted = users[userIndex];

        this.users.splice(userIndex);

        return userToBeDeleted;
    }

}
