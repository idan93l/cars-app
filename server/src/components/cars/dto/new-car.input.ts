import { Field, InputType, Int } from '@nestjs/graphql';
import { Max } from 'class-validator';
import { Min } from 'class-validator/types/decorator/decorators';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(20000)
  @Min(1500)
  monthlyPrice: number;

  @Field((type) => Int)
  @Max(1000)
  @Min(10)
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
