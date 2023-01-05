import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from './models/user';

@Injectable()
export class UsersService {
    private users: User[] = [];

    public createUser(createUserData: CreateUserInput): User {
        const user: User = {
            userId: 
        }
    }
    
    public updateUser(): User {

    }

    public getUser(): User {

    }

    public getUsers(): User {

    }

    public deleteUser(): User {

    }

}
