import React from 'react'
import { ICar } from '../../../typings/car'

interface ICarProps extends ICar{

}

function Car(props: ICarProps) {
  return (
    <div>Car</div>
  )
}

export default Car