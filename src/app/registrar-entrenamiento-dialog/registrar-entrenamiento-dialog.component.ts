import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ExerciseServiceService } from '../services/exercise-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateRoutineDialogComponent } from '../create-routine-dialog/create-routine-dialog.component';
import { StatServicesService } from '../services/stat-services.service';
import { Stat } from '../classes/StatClass';

@Component({
  selector: 'app-registrar-entrenamiento-dialog',
  templateUrl: './registrar-entrenamiento-dialog.component.html',
  styleUrls: ['./registrar-entrenamiento-dialog.component.css']
})
export class RegistrarEntrenamientoDialogComponent implements OnInit {
  currentDate: Date = new Date();

  constructor(
    private exerciseService: ExerciseServiceService,
    private statService: StatServicesService,
    public dialogRef: MatDialogRef<RegistrarEntrenamientoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data_dialog: any

  ) { }

  id_rutina = this.data_dialog.rutina;


  displayedColumns: string[] = ['name', 'weight', 'sets', 'reps'];
  dataSource = [];

  ngOnInit(): void {
    this.conseguirEjercicios()

  }

  public conseguirEjercicios() {
    this.exerciseService.getExercisesByRoutine(this.id_rutina).subscribe((data) => {
      this.dataSource = data;
    })

  }

  guardar() {
    console.log("GUARDAR");
    const data = this.dataSource.map(element => {
      return {
        name: element.name,
        weight: element.weight,
        reps: element.reps,
        sets: element.sets,
        id: element.routineExercise_id,
        dateWorkout: this.currentDate,
      };
    });

    data.forEach(element => {
      const statInstance = new Stat(element.sets, element.reps, element.weight, element.id, element.dateWorkout);
      this.statService.createStat(statInstance).subscribe((result) => {
        console.log(result);
      })

    });

  }

  cancelar() {
    this.dialogRef.close();

  }

  validateNumber(event: any) {
    const keyCode = event.which ? event.which : event.keyCode;
    const valid = keyCode >= 48 && keyCode <= 57; // 48-57 represent the ASCII codes for 0-9

    if (!valid) {
      event.preventDefault();
    }
  }



}
