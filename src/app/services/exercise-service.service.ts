import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseServiceService {


  constructor(private http: HttpClient) { }

  getAllExercises(): Observable<any> {
    return this.http.get(`${API_URL}Exercise`);
  }


  getExercisesByRoutine(routine_id: Number): Observable<any> {
    return this.http.get(`${API_URL}RoutineExercise/exercises/${routine_id}`);
  }

}
