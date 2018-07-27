import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Vehicle } from '../models/vehicle.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {

  @Input()
  public vehicles: Vehicle[] = [];

  @Output()
  public editedVehicle: EventEmitter<Vehicle>;

  public editingVehicle: Vehicle;

  constructor() {
    this.editedVehicle = new EventEmitter();
  }

  assingEditingVehicle(vehicle: Vehicle): void {
    this.editingVehicle = vehicle;
  }

  saveVehicle(vehicle: Vehicle): void {
    this.editingVehicle = null;
    this.editedVehicle.emit(vehicle);
  }

  isEditing(vehicle: Vehicle): boolean {
    return this.editingVehicle != null && this.editingVehicle.id === vehicle.id;
  }

}
