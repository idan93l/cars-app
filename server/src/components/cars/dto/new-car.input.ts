import { Field, InputType, Int } from '@nestjs/graphql';
import { Max } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  monthlyPrice: number;

  @Field((type) => Int)
  @Max(1000)
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
