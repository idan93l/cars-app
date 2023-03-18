import { Module } from '@nestjs/common';
import { CarService } from './cars.service';

@Module({
  imports: [],
  providers: [CarService],
  exports: [],
})
export class CarsModule {}
