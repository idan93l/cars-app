export interface GetCars_cars {
  __typename: "Car";
  id: string;
  name: string;
  mileage: string;
  gearType: string;
  gas: string;
  thumbnailUrl: string;
  dailyPrice: number;
  monthlyPrice: number;
}

export interface GetCars {
  cars: GetCars_cars[];
}