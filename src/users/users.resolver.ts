import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { User } from "./models/user";
import { UsersService } from "./users.service";

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly userService: UsersService) {}

    @Query(() => User, { name: 'user', nullable: true })
    getUser(@Args() getUserArgs: GetUserArgs): User {
        return this.userService.getUser(getUserArgs);
    }

    @Query(() => [User], { name: 'users', nullable: 'items' }) //nullable: 'items allows the items in the array to be null, but not the list itself
    //could also enter nullable: 'itemsAndList'
    getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
        return this.userService.getUsers(getUsersArgs);
    }

    @Mutation(() => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput): User {
        return this.userService.createUser(createUserData);
    }

    @Mutation(() => User)
    updateUser(@Args('updateUserData') updatedUserData: UpdateUserInput): User {
        return this.userService.updateUser(updatedUserData);
    }

    @Mutation(() => User)
    deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
        return this.userService.deleteUser(deleteUserData);
    }
}

// Here's another way to write resolver functions using generic object returns Promise<ObjectToBeReturned>
// in this example: the books resolver is defined as a GraphQL query that returns a Promise<Book[]>, 
// cawhich means that it will asynchronously resolve to an array of Book objects.

// @Resolver()
// export class BooksResolver {
//   constructor(private readonly booksService: BooksService) {}

//   @Query()
//   async books(): Promise<Book[]> {
//     return this.booksService.getBooks();
//   }

//   @Mutation()
//   async createBook(data: CreateBookInput): Promise<Book> {
//     return this.booksService.createBook(data);
//   }
// }
