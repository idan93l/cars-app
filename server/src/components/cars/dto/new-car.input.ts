import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewCarInput {
  @Field()
  name: string;
}
