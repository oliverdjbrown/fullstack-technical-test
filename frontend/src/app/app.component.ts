import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './modules/employee/components/employee/employee.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
