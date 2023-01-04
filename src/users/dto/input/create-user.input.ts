import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, isNotEmpty } from "class-validator";

@InputType()
export class CreateUserInput {
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Field()
    @IsNotEmpty()
    age: number;

}