import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'employee',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent{
  private employeeService = inject(EmployeeService);
  employeeId = new FormControl('');
  employees: Employee[] = [];
  showNotIdAlert = false;
  showNotFoundAlert = false;

  getEmployeeById(): void {
    this.showNotIdAlert = false;
    this.showNotFoundAlert = false;

    const id = this.employeeId.value;

    if (!id) {
      this.showNotIdAlert = true;
      return;
    }

    this.employeeService.getEmployeeById(id).subscribe((employee: Employee[]) => {
      this.employees = employee;
    }, ()=> {
      this.showNotFoundAlert = true;
    });
  }

  clear(): void {
    this.employeeId.reset();

    this.showNotIdAlert = false;
    this.showNotFoundAlert = false;

    this.employees = [];
  }
}
