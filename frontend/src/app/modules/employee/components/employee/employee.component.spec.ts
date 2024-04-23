import { inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let fixture: EmployeeComponent;
  let employeeService: EmployeeService;

  beforeEach(() => {
    fixture = new EmployeeComponent();
    employeeService = inject(EmployeeService);
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
