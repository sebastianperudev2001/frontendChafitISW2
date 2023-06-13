import { Component, OnInit } from '@angular/core';

import { ExerciseServiceService } from '../services/exercise-service.service';
import { RoutinesServicesService } from '../services/routines-services.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StatServicesService } from '../services/stat-services.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateRoutineDialogComponent } from '../create-routine-dialog/create-routine-dialog.component';
import { RegistrarEntrenamientoDialogComponent } from '../registrar-entrenamiento-dialog/registrar-entrenamiento-dialog.component';

export interface Exercise {
  exercise_id: number,
  name: string,
  muscle_id: number,
}




const EXERCISE_DATA: Exercise[] = []

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})




export class MainMenuComponent implements OnInit {
  formGroup: FormGroup;

  dataSource: any = [];
  routinesByUser: any = [];

  displayedColumns: string[] = ['exercise_id', 'name', 'muscle_id'];
  columnsExerciseByUser: string[] = ['routine_id', 'routine_name', 'accion'];
  statsByExerciseIdUser: string[] = ['exerName', 'gymRep', 'gymSet', 'weight', 'routine_name', 'dateWorkout'];


  statsByExercise: any[] = [];



  constructor(
    private exerciseService: ExerciseServiceService,
    private routineService: RoutinesServicesService,
    private formBuilder: FormBuilder,
    private statService: StatServicesService,
    public dialog: MatDialog
  ) {

    this.formGroup = this.formBuilder.group({
      id_exercise: new FormControl('', [Validators.required]),
    })
  }

  showHistory() {

    console.log(this.formGroup.value.id_exercise);
    const id_user = 1
    const id_exer = this.formGroup.value.id_exercise
    this.statService.getAllStatsByUserExercise(id_user, id_exer).subscribe((data) => {
      console.log(data);
      this.statsByExercise = data;
    })

  }

  ngOnInit() {
    this.rellenarTabla();

  }

  public rellenarTabla() {
    this.exerciseService.getAllExercises().subscribe((data) => {
      console.log(data);
      this.dataSource = data;
    })

    this.routineService.getRoutineByUser(1).subscribe((data) => {
      console.log(data);
      this.routinesByUser = data;
    })
  }

  public createRoutine() {
    const dialogRef = this.dialog.open(CreateRoutineDialogComponent, {
      height: '400px',
      width: '600px',
    }).afterClosed()
      .subscribe((result) => {
        this.ngOnInit()
      });;

  }
  public registrarEntrenamiento() {
    const dialogRef = this.dialog.open(RegistrarEntrenamientoDialogComponent,
      {
        height: '400px',
        width: '1000px',
      }).afterClosed()
      .subscribe((result) => {
        this.ngOnInit()
      });;
  }


}
