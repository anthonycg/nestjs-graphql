import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class GetUserArgs {
    @Field()
    @IsNotEmpty() //class validator will handle validation and error responses for us
    userId: string;
}