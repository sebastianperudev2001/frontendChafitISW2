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
    console.log("I am service")
    return this.http.get(`${API_URL}Exercise`);
  }

}
