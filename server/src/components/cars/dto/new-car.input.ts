import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field()
  monthlyPrice: number;

  @Field()
  dailyPrice: number;

  @Field()
  mileage: string;
}
