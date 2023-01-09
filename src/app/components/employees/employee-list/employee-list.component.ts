//employee la hadanne and backend eken push krnne me file eken
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[] = [
    {
      id: 'emp001',
      name: 'Sajani Pathegama',
      email: 'sajani@gmail.com',
      phone: 715670110,
      salary: 12250,
      department: 'IT',
    },
    {
      id: 'emp002',
      name: 'Kishan Randika',
      email: 'kishan@gmail.com',
      phone: 766552013,
      salary: 50000,
      department: 'Mechanical',
    },
    {
      id: 'emp003',
      name: 'Lumini Pathegama',
      email: 'lumini@gmail.com',
      phone: 702088268,
      salary: 37000,
      department: 'Manager',
    }
  ]
  constructor(){}

  ngOnInit():void{
    //this.employees.push();
  }
}
