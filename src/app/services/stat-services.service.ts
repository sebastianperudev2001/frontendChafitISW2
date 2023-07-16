
import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { Stat } from '../classes/StatClass';

@Injectable({
  providedIn: 'root'
})
export class StatServicesService {

  constructor(private http: HttpClient) {

  }

  getAllStatsByUserExercise(user_id: Number, exercise_id: number): Observable<any> {
    return this.http.get(`${API_URL}Stat/${user_id}/${exercise_id}`);

  }


  createStat(stat: Stat): Observable<any> {
    console.log(stat);
    return this.http.post(`${API_URL}Stat`, stat);

  }



}

