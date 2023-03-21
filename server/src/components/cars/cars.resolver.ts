import { Resolver, Query } from '@nestjs/graphql';
import { CarService } from './cars.service';
import { Car } from './entities/car';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarService) {}

  @Query((returns) => {Car})
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars();
  }
}
