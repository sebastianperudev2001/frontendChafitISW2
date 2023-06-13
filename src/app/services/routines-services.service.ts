import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoutinesServicesService {

  constructor(private http: HttpClient) { }

  createRoutine(data: any): Observable<any> {
    console.log("Probando createRoutine")
    console.log(data);
    return this.http.post(`${API_URL}Routine`, data);
  }


  createRoutineExercise(data: any): Observable<any> {
    return this.http.post(`${API_URL}RoutineExercise`, data);

  }

  getRoutineByUser(id_user: number): Observable<any> {
    return this.http.get(`${API_URL}Routine/user/${id_user}`);
  }

  getAllExercises(): Observable<any> {
    console.log("I am service")
    return this.http.get(`${API_URL}Exercise`);
  }




}
