import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatServicesService {

  constructor(private http: HttpClient) {

  }

  getAllStatsByUserExercise(user_id: Number, exercise_id: number): Observable<any> {
    return this.http.get(`${API_URL}Stat/${user_id}/${exercise_id}`);

  }

}
