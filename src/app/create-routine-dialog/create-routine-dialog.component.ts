import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExerciseServiceService } from '../services/exercise-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { RoutinesServicesService } from '../services/routines-services.service';
import { RoutineBuilder } from '../classes/RoutineBuilder';

@Component({
  selector: 'app-create-routine-dialog',
  templateUrl: './create-routine-dialog.component.html',
  styleUrls: ['./create-routine-dialog.component.css']
})
export class CreateRoutineDialogComponent {

  ejercicios = new FormControl('');
  routine_name = new FormControl('');

  exercisesList: any = [];
  currentDate: Date = new Date();
  id_routina: any;
  id_exercises: any = []


  constructor(
    private exerciseService: ExerciseServiceService,
    public dialogRef: MatDialogRef<CreateRoutineDialogComponent>,
    private routineService: RoutinesServicesService,

  ) {

  }


  ngOnInit(): void {
    this.exerciseService.getAllExercises().subscribe((data) => {
      console.log(data);
      this.exercisesList = data;
    })
  }

  cancelar() {
    this.dialogRef.close();
    console.log(this.ejercicios.value)

  }

  guardar() {
    const data =
    {
      "user_id": 1,
      "routine_name": this.routine_name.value,
    }

    const rb = new RoutineBuilder();
    rb.setUserId(1);
    rb.setName(this.routine_name.value);
    rb.

      this.id_exercises = this.ejercicios.value;

    this.routineService.createRoutine(data).subscribe((result) => {
      this.id_routina = result
      for (const element of this.id_exercises) {
        const routineExercise =
        {
          "routine_id": result,
          "exercise_id": element,
          "dateWorkout": this.currentDate,
        }
        console.log(routineExercise)
        this.routineService.createRoutineExercise(routineExercise).subscribe((result) => {
          this.id_routina = result
        })
      }
    })

    //Crear varias RoutineExercise asociada a la rutina --> workoutDate (fecha de Hoy)


    this.dialogRef.close();
  }



}
