import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  monthlyPrice: number;

  @Field()
  dailyPrice: number;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field()
  thumbnailUrl: string;
}
