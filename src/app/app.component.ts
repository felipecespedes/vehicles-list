import { Component, OnInit } from '@angular/core';
import { Vehicle } from './models/vehicle.model';
import { VehiclesService } from './services/vehicles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public vehicles: Vehicle[] = [];

  constructor(private vehiclesService: VehiclesService) {}

  ngOnInit() {
    this.vehiclesService.getVehiclesList().subscribe(vehicles => this.vehicles = vehicles);
  }

  updateVehicle(vehicle: Vehicle): void {
    this.vehiclesService.updateVehicle(vehicle).subscribe(vehicles => this.vehicles = vehicles);
  }

}
