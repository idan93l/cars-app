import { Field, ObjectType } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "cars" })
@ObjectType()
export class Car {

  @PrimaryGeneratedColumn("uuid")
  @Field()

}