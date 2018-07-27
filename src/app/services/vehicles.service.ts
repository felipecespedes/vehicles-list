import { Injectable } from '../../../node_modules/@angular/core';
import { Observable, Observer } from '../../../node_modules/rxjs';
import { Vehicle } from '../models/vehicle.model';

@Injectable()
export class VehiclesService {

  private vehicles: Vehicle[] = [];

  getVehiclesList(): Observable<Vehicle[]> {
    return new Observable((observer: Observer<Vehicle[]>) => {
      this.vehicles = this.initializeVehiclesList();
      observer.next(this.vehicles);
      observer.complete();
    });
  }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle[]> {
    return new Observable((observer: Observer<Vehicle[]>) => {
      this.vehicles.forEach(v => {
        if (v.id === vehicle.id) {
          v = vehicle;
        }
      });
      observer.next(this.vehicles);
      observer.complete();
    });
  }

  private initializeVehiclesList(): Vehicle[] {
    const vehiclesList = [
      {
        id: 0,
        brand: 'KIA',
        model: 'Pro Ceed',
        year: '2002',
        color: 'black',
      },
      {
        id: 1,
        brand: 'Ford',
        model: 'Focus',
        year: '2018',
        color: 'red',
      },
      {
        id: 2,
        brand: 'Audi',
        model: 'A3 Sportback',
        year: '2016',
        color: 'green',
      },
      {
        id: 3,
        brand: 'Opel',
        model: 'Astra',
        year: '2016',
        color: 'black',
      },
      {
        id: 4,
        brand: 'Mercedes-Benz',
        model: 'Class A',
        year: '2018',
        color: 'pearl grey',
      },
      {
        id: 5,
        brand: 'Honda',
        model: 'Civic',
        year: '2014',
        color: 'white',
      },
      {
        id: 6,
        brand: 'SEAT',
        model: 'León',
        year: '2013',
        color: 'red',
      }
    ];

    return vehiclesList;
  }

}
