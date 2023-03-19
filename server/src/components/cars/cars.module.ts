import { Module } from '@nestjs/common';
import { CarService } from './cars.service';

@Module({
  imports: [],
  providers: [CarService],
  exports: [CarService],
})
export class CarsModule {}
