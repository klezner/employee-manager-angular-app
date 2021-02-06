import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = '';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('${this.apiServerUrl}/employee/all');
  }

  public getEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>('${this.apiServerUrl}/employee/${employeeId}');
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('%{this.apiServerUrl}/employee/add', employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>('${this.apiServerUrl/empoyee/update', employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>('${this.apiServerUrl}/employee/delete/${employeeId}');
  }
}
